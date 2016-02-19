import React from 'react';
import ReactDOM from 'react-dom';

/* 榜单标题组件 */
export class TitleTop extends React.Component {
  render() {
    let titleSelected = this.props.selected,       // 获取父组件中初始选取的标题
        titleTop = this.props.titleTop,          // 获取父组件全部标题名称
        titleList = [];

    titleTop.forEach(function(titleItem, index) {
      titleList.push(
        <li className={titleSelected === titleItem ? 'on' : ''} key={index}>
          <a href="javascript:;" onClick={this.handleTitleChang.bind(this,titleItem)}>
            {titleItem}
          </a>
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
/* 榜单标题组件--End */

module.exports = TitleTop;
