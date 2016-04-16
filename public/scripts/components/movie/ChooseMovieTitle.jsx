import React from 'react';

/* 选电影/选电视剧标题组件 */
class ChooseMoviesTitle extends React.Component {
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

module.exports = ChooseMoviesTitle;
