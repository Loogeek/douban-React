import React from 'react';
import ReactDOM from 'react-dom';
import TitleTop from './TitleTop.jsx';

/* 近期热门歌单分类组件 */
export class HotProgrammes extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: '最热',
      loading: true,
      data: [],
      dataPro: null
    }
  }
  render() {
    let programmeList = [],
        titleTop = ['最热','流行','摇滚','民谣','原生'];
    if(!this.state.loading) {
      let dataCars = this.state.data;
      if (dataCars) {
        var titleMore = "/music/results?pro="+ this.state.dataPro._id +"&p=0";
        for(let i = 0,len = dataCars.length; i < Math.min(6,len); i++){
          programmeList.push(
            <ProgrammeItem dataCars={dataCars[i]} key={i} />
          )
        }
      }
    }
    return (
      <div>
        <div className="class-top">
          <span>近期热门歌单</span>
          <TitleTop titleTop={titleTop} selected={this.state.selected} onDataChange={e => this.getData(e)} />
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
    let url = this.props.source + encodeURIComponent('近期热门歌单' + value);
    $.get(url, (results) => {
      this.setState({
        loading: false,
        selected: value,
        data: results.data,
        dataPro: results.dataPro
      });
    });
  }
}
/* 近期热门歌单分类组件--End */

/* 近期热门歌单每个分类中的歌单组件 */
export class ProgrammeItem extends React.Component {
  render() {
    let dataMusics = this.props.dataCars.musics,
        arrList = [];
    for(let i = 0,len = dataMusics.length; i < Math.min(3,len); i++) {
      arrList.push(
        <a key={i} href={'/music/' + dataMusics[i]._id} target="_blank" title={dataMusics[i].title}>
          <p key={i}>{i + 1 + '.' + dataMusics[i].title}</p>
        </a>
      );
    }
    if(arrList.length > 2) {
      arrList.push(
        <span key={this.props.dataCars._id}>...</span>
      );
    }
    return (
      <div className="thumbnail">
        <div className="inner">
          <h5>{this.props.dataCars.name}</h5>
          <img src={dataMusics[0] ? dataMusics[0].image : ''}
               alt={dataMusics[0] ? dataMusics[0].title : ''}
               style={dataMusics[0] ? {display: 'inline'} : {display: 'none'}}/>
          {arrList}
        </div>
      </div>
    );
  }
}
/* 近期热门歌单每个分类中的歌单组件--End */

ReactDOM.render(<HotProgrammes source='/musicindex?hotProName=' />,
                document.getElementById('hotProgrammes'));
