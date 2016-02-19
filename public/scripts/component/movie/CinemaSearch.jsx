// import React from 'react';
// import ReactDOM from 'react-dom';

/* 电影院搜索区域整体组件 */
var CinemaSearch = React.createClass({
  getInitialState: function() {
    return {
      cityName: '广州',
      checked: false,
      loading: true,
      data: []
    };
  },
  render: function() {
    var filmList = [];
    if(!this.state.loading) {
      var data = this.state.data;
      console.log(data);
      if (data) {
        // for(var i = 0,len = data.length; i < len; i++) {
        //   filmList.push(
        //     <FliterMovieItem data = {data[i]} key = {i} />
        //   );
        // }
      }
    }
    return (
      <div id="citySearch" className="city">
        <span>广州</span>
        <i className="glyphicon glyphicon-triangle-bottom"></i>
        <div id="citiesList" style={{display: 'none'}} className="cities-list">
          <ul className="cities-list-hd">

          </ul>
          <div class="cities-list-bd">

          </div>
        </div>
      </div>
    );
  },
  componentDidMount: function() {
    var cityName = this.state.cityName,
        searchName = '';
    this.getData(cityName,searchName);
  },
  handleCinemaValue: function() {

  },
  getData: function(cityName,searchName) {
    var url = this.props.source + encodeURIComponent(cityName) + '&&search=' + encodeURIComponent(searchName) + '&&reactFlag = 1';
    $.get(url, function(results) {
      this.setState({
        cityName: cityName,
        loading: false,
        data: results
      });
    }.bind(this));
  }
});
/* 电影院搜索区域整体组件--End */

/* 添加选电影/选电视组件到节点中 */
ReactDOM.render(<CinemaSearch source = '/?cityName=' />,
                document.getElementById('cinemasSearch'));
