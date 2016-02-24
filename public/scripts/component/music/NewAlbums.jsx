import React from 'react';
import ReactDOM from 'react-dom';
import TitleTop from './TitleTop.jsx';

/* 新碟榜整体区域组件 */
export class NewAlbums extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: '最热',
      loading: true,
      data: []
    }
  }
  render() {
    var newAlbumList = [],
        titleTop = ['最热','华语','欧美','日韩','单曲'];
    if(!this.state.loading) {
      var data = this.state.data;
      if (data && data.musics) {
        var titleMore = "/music/results?cat=" + data._id + "&p=0";
        for(var i = 0,len = data.musics.length; i < Math.min(8,len); i++){
          newAlbumList.push(
            <AlbumItem data={data.musics[i]} key={i} />
          );
        }
      }
    }
    return (
      <div>
        <div className="class-top">
          <span>新碟榜</span>
          <TitleTop titleTop={titleTop} selected={this.state.selected} onDataChange={e => this.getData(e)} />
          <a href={titleMore} target="_blank" className="more">更多</a>
        </div>
        <div className="screen">
          <div className="panel-body screen-body">
            {newAlbumList}
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    let value = this.state.selected;
    this.getData(value);
  }
  getData(value) {
    let url = this.props.source + encodeURIComponent('新碟榜' + value);
    $.get(url, (results) => {
      this.setState({
        loading: false,
        selected: value,
        data: results.data
      });
    });
  }
}
/* 新碟榜整体区域组件--End */

/* 新碟榜展示内容组件 */
export class AlbumItem extends React.Component {
  render() {
    return (
      <div className="thumbnail">
        <a href={'/music/' +this.props.data._id} target="_blank">
          <img src={this.props.data.image}  alt={this.props.data.title} />
        </a>
        <div className="caption">
          <h5>{this.props.data.title}</h5>
          <p>{this.props.data.singer}</p>
        </div>
      </div>
    );
  }
}
/* 新碟榜展示内容组件--End */

ReactDOM.render(<NewAlbums source='/musicindex?albumName=' />,
                document.getElementById('newAlbums'));
