import React from 'react';
import ReactDOM from 'react-dom';

/* 选电影/选电视剧区域整体组件 */
export class FliterMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: '热门',
      loading: true,
      data: [],
      filmTitle: ['热门','最新','经典','豆瓣高分','冷片佳作','华语','欧美','韩国','日本','动作','喜剧']
    }
  }
  render() {
    let filmList = [];
    if(!this.state.loading) {
      let data = this.state.data;
      if (data && data.movies) {
        data.movies.forEach(function(movieItem, index) {
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
            onDataChange = {this.getData.bind(this)}/>
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
    let url = this.props.source + encodeURIComponent(value + '电影');
    $.get(url, function(results) {
      this.setState({
        loading: false,
        selected: value,
        data: results.data
      });
    }.bind(this));
  }
}
/* 选电影/选电视剧区域整体组件--End */

/* 选电影/选电视剧内容组件 */
export class FliterMovieItem extends React.Component {
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
export class FliterTitle extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let titleSeleted = this.props.selected,       // 获取父组件中初始选取的标题
        filmTitle = this.props.filmTitle,          // 获取父组件全部标题名称
        titleList = [];

    filmTitle.forEach(function(filmItem, index) {
      titleList.push(
        <li key = {index}>
          <button
            className = {titleSeleted === filmItem ? 'btn btn-primary' : 'btn btn-default'}
            key = {index} onClick = {this.handleTitleChang.bind(this,filmItem)}>
            {filmItem}
          </button>
        </li>
      );
    }.bind(this));
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
