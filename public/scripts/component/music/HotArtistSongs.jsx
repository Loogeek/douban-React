import React from 'react';
import ReactDOM from 'react-dom';
import TitleTop from './TitleTop.jsx';

/* 本周单曲榜整体区域组件 */
export class HotArtistSongs extends React.Component {
  constructor() {
    super();
    // this.getData = () => this.getData();
    this.state = {
      selected: '最热',
      loading: true,
      data: []
    }
  }
  render() {
    let artistList = [],
        titleTop = ['最热','摇滚','民谣','流行','电子'];
    if(!this.state.loading) {
      let data = this.state.data;
      if (data && data.musics) {
        for(let i = 0,len = data.musics.length; i < Math.min(10,len); i++){
          artistList.push(
            <SongItem data={data.musics[i]} key={i} value={i+1} />
          );
        }
      }
    }
    return (
      <div className="billboard">
        <div className="billboard-hd">
          <h4>本周单曲榜</h4>
          <button className="play-button">
            <i className="glyphicon glyphicon-play"></i>
            <span>播放全部</span>
          </button>
        </div>
        <div className="billboard-bd class-top">
          <TitleTop titleTop={titleTop} selected={this.state.selected} onDataChange={e => this.getData(e)} />
        </div>
        <div className="hotArtist-songs">
          <ul>
            {artistList}
          </ul>
        </div>
      </div>
    );
  }
  componentDidMount() {
    let value = this.state.selected;
    this.getData(value);
  }
  getData(value) {
    let url = this.props.source + encodeURIComponent('本周单曲榜' + value);
    $.get(url, (results) => {
      this.setState({
        loading: false,
        selected: value,
        data: results.data
      });
    });
  }
}
/* 本周单曲榜整体区域组件--End */

/* 新碟榜展示内容组件 */
export class SongItem extends React.Component {
  render() {
    return (
      <li>
        <a href={'/music/' +this.props.data._id} target="_blank">
          <img src={this.props.data.image}  alt={this.props.data.title} />
          <h5>{this.props.data.title}</h5>
          <p>{this.props.data.singer}</p>
          <span className="order">{this.props.value}</span>
        </a>
      </li>
    );
  }
}
/* 新碟榜展示内容组件--End */

ReactDOM.render(<HotArtistSongs source='/musicindex?hotSongs=' />,
                document.getElementById('hotArtistSongs'));
