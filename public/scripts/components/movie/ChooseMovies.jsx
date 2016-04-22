import React from 'react';
import ReactDOM from 'react-dom';
import ChooseMovieItem from './ChooseMovieItem';
import ChooseMovieTitle from './ChooseMovieTitle';

/* 选电影/选电视剧区域整体组件 */
class ChooseMovies extends React.Component {
  constructor() {
    super();
    this.state = {
      filmTitle: ['热门','最新','经典','豆瓣高分','冷门佳片','华语','欧美','韩国'],
      selected: '热门',
      loading: true,
      data: [],
      currentData: {}
    }
  }
  render() {
    let filmList = [];
    if(!this.state.loading) {
      let currentData = this.state.currentData;
      if (currentData && currentData.movies) {
        currentData.movies.forEach((movieItem, index) => {
          filmList.push(
            <ChooseMovieItem data = {movieItem} key = {index} />
          );
        });
      }
    }
    return (
      <div className = "screen">
        <div className = "class-top">
          <span className = "active">选电影</span>
          <i>&nbsp;/&nbsp;</i>
          <span>选电视剧</span>
          <hr />
          <ChooseMovieTitle filmTitle = {this.state.filmTitle} selected = {this.state.selected}
            onDataChange = {e => this.getData(e)}/>
          <hr />
        </div>
        <div className = "screen">
          <div className = "panel panel-default">
            <div id = "classNameBody" className = "panel-body screen-body">
              {filmList}
            </div>
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
    let url = this.props.source + encodeURIComponent(value + '电影');
    $.get(url, (results) => {
      this.setState({
        loading: false,
        selected: value,
        currentData: results.data
      });
      this.state.data.push(results.data);                // 将新返回的数据添加到数组中
    });
  }
}
/* 选电影/选电视剧区域整体组件--End */

/* 添加选电影/选电视组件到节点中 */
ReactDOM.render(<ChooseMovies source = '/?fliterName=' />,
                document.getElementById('fliterMovies'));

module.exports = ChooseMovies;
