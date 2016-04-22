import React from 'react';
import ReactDOM from 'react-dom';
import HotProgrammeItem from './HotProgrammeItem';
import Title from './Title';

/* 近期热门歌单分类组件 */
class HotProgrammes extends React.Component {
  constructor() {
    super();
    this.state = {
      titleTop: ['最热','流行','摇滚','民谣','原生'],
      selected: '最热',
      loading: true,
      data: [],
      currentData: {},                                // 当前显示数据
      dataPro: [],
      index: 0
    }
  }
  render() {
    let programmeList = [];
    if(!this.state.loading) {
      let currentData = this.state.currentData;
      if (currentData) {
        var titleMore = "/music/results?pro="+ this.state.dataPro[this.state.index]._id +"&p=0";
        for(let item of currentData) {
          programmeList.push(
            <HotProgrammeItem dataCars={item} key={item._id} />
          );
        }
      }
    }
    return (
      <div>
        <div className="class-top">
          <span>近期热门歌单</span>
          <Title titleTop={this.state.titleTop} selected={this.state.selected} onDataChange={e => this.getData(e)} />
          <a href={titleMore} target="_blank" className="more">更多</a>
        </div>
        <div className="screen">
          <div className="panel-body screen-body">
            {programmeList}
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
    // 判断dataPro数组中是否已有该标题对应的数据，如果有则将该值赋给currentData并返回
    let dataPro = this.state.dataPro;
    for(let i = 0; i < dataPro.length; i++) {
      if (dataPro[i].name.includes(value)) {
        this.setState({
          loading: false,
          selected: value,
          currentData: this.state.data[i],
          index: i
        });
        return;
      }
    }
    // 如果data中没有该数据则通过Ajax请求并保存
    let url = this.props.source + encodeURIComponent('近期热门歌单' + value);
    $.get(url, (results) => {
      this.state.dataPro.push(results.dataPro);
      this.state.data.push(results.data);                // 将新返回的数据添加到数组中
      this.setState({
        loading: false,
        selected: value,
        currentData: results.data,
        index: (this.state.dataPro.length - 1)
      });
    });
  }
}
/* 近期热门歌单分类组件--End */

ReactDOM.render(<HotProgrammes source='/musicindex?hotProName=' />,
                document.getElementById('hotProgrammes'));

module.exports = HotProgrammes;
