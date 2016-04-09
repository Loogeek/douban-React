import React from 'react';
import ReactDOM from 'react-dom';

/* 选电影/选电视剧区域整体组件 */
class FliterMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filmTitle: ['热门','最新','经典','豆瓣高分','冷片佳作','华语','欧美','韩国','日本','动作','喜剧'],
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
            <FliterMovieItem data = {movieItem} key = {index} />
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
          <FliterTitle filmTitle = {this.state.filmTitle} selected = {this.state.selected}
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
      if(item) {
        let index = item.name.indexOf(value);
        if(index !== -1) {
          this.setState({
            loading: false,
            selected: value,
            currentData: item
          });
          return;
        }
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

/* 选电影/选电视剧内容组件 */
class FliterMovieItem extends React.Component {
  render() {
    return (
      <div className = "col-md-3 col-xs-4">
        <div className = "thumbnail">
          <a href = {/movie/ + this.props.data._id} target = "_blank">
            <img src = {this.props.data.poster} alt = {this.props.data.title} />
          </a>
          <div className = "caption">
            <h5>{this.props.data.title}</h5>
          </div>
        </div>
      </div>
    );
  }
}
/* 选电影/选电视剧内容组件--End */

/* 选电影/选电视剧标题组件 */
class FliterTitle extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let titleSeleted = this.props.selected,       // 获取父组件中初始选取的标题
        filmTitle = this.props.filmTitle,          // 获取父组件全部标题名称
        titleList = [];

    filmTitle.forEach((filmItem, index) => {
      titleList.push(
        <li key = {index}>
          <button
            className = {titleSeleted === filmItem ? 'btn btn-primary' : 'btn btn-default'}
            key = {index} onClick = {e => this.handleTitleChang(filmItem)}>
            {filmItem}
          </button>
        </li>
      );
    });
    return (
      <ul>
        {titleList}
      </ul>
    );
  }
  handleTitleChang(titleName) {
    if(this.props.selected !== titleName) {
      this.props.onDataChange(titleName);
    }
  }
}
/* 选电影/选电视剧标题组件--End */

/* 添加选电影/选电视组件到节点中 */
ReactDOM.render(<FliterMovies source = '/?fliterName=' />,
                document.getElementById('fliterMovies'));

module.exports = {FliterMovies,FliterMovieItem,FliterTitle};
