import React from 'react';
import ReactDOM from 'react-dom';
import ArtistSongItem from './ArtistSongItem';
import Title from './Title';

/* 本周单曲榜整体区域组件 */
class HotArtistSongs extends React.Component {
  constructor() {
    super();
    this.state = {
      titleTop: ['最热','摇滚','民谣','流行','电子'],    // 标题
      selected: '最热',                               // 当前选择的标题值
      loading: true,                                 // 判断数据是否加载完成
      data: [],                                      // 该区域全部数据
      currentData: {}                                // 当前显示数据
    }
  }
  render() {
    let artistList = [];
    if(!this.state.loading) {
      let currentData = this.state.currentData;
      if (currentData && currentData.musics) {
        for(let i = 0; i < currentData.musics.length; i++) {
          artistList.push(
            <ArtistSongItem data={currentData.musics[i]} key={currentData.musics[i]._id} value={i+1} />
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
          <Title titleTop={this.state.titleTop} selected={this.state.selected} onDataChange={e => this.getData(e)} />
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
    // 判断data数组中是否已有该标题对应的数据，如果有则将该值赋给currentData并返回
    for(let item of this.state.data) {
      if (item.name.includes(value)) {
        this.setState({
          loading: false,
          selected: value,
          currentData: item
        });
        return;
      }
    }
    // 如果data中没有该数据则通过Ajax请求并保存
    let url = this.props.source + encodeURIComponent('本周单曲榜' + value);
    $.get(url, (results) => {
      this.setState({
        loading: false,
        selected: value,
        currentData: results.data
      });
      this.state.data.push(results.data);                 // 将新返回的数据添加到数组中
    });
  }
}
/* 本周单曲榜整体区域组件--End */

ReactDOM.render(<HotArtistSongs source='/musicindex?hotSongs=' />,
                document.getElementById('hotArtistSongs'));

module.exports = HotArtistSongs;
