import React from 'react';

/* 选电影/选电视剧内容组件 */
class ChooseMovieItem extends React.Component {
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

module.exports = ChooseMovieItem;
