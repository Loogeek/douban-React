webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(159);
	__webpack_require__(161);
	module.exports = __webpack_require__(162);


/***/ },

/***/ 159:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.AlbumItem = exports.NewAlbums = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(158);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _TitleTop = __webpack_require__(160);

	var _TitleTop2 = _interopRequireDefault(_TitleTop);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/* 新碟榜整体区域组件 */

	var NewAlbums = exports.NewAlbums = function (_React$Component) {
	  _inherits(NewAlbums, _React$Component);

	  function NewAlbums() {
	    _classCallCheck(this, NewAlbums);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(NewAlbums).call(this));

	    _this.state = {
	      selected: '最热',
	      loading: true,
	      data: []
	    };
	    return _this;
	  }

	  _createClass(NewAlbums, [{
	    key: 'render',
	    value: function render() {
	      var newAlbumList = [],
	          titleTop = ['最热', '华语', '欧美', '日韩', '单曲'];
	      if (!this.state.loading) {
	        var data = this.state.data;
	        if (data && data.musics) {
	          var titleMore = "/music/results?cat=" + data._id + "&p=0";
	          for (var i = 0, len = data.musics.length; i < Math.min(8, len); i++) {
	            newAlbumList.push(_react2.default.createElement(AlbumItem, { data: data.musics[i], key: i }));
	          }
	        }
	      }
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: 'class-top' },
	          _react2.default.createElement(
	            'span',
	            null,
	            '新碟榜'
	          ),
	          _react2.default.createElement(_TitleTop2.default, { titleTop: titleTop, selected: this.state.selected, onDataChange: this.getData.bind(this) }),
	          _react2.default.createElement(
	            'a',
	            { href: titleMore, target: '_blank', className: 'more' },
	            '更多'
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'screen' },
	          _react2.default.createElement(
	            'div',
	            { className: 'panel-body screen-body' },
	            newAlbumList
	          )
	        )
	      );
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var value = this.state.selected;
	      this.getData(value);
	    }
	  }, {
	    key: 'getData',
	    value: function getData(value) {
	      var url = this.props.source + encodeURIComponent('新碟榜' + value);
	      $.get(url, function (results) {
	        this.setState({
	          loading: false,
	          selected: value,
	          data: results.data
	        });
	      }.bind(this));
	    }
	  }]);

	  return NewAlbums;
	}(_react2.default.Component);
	/* 新碟榜整体区域组件--End */

	/* 新碟榜展示内容组件 */


	var AlbumItem = exports.AlbumItem = function (_React$Component2) {
	  _inherits(AlbumItem, _React$Component2);

	  function AlbumItem() {
	    _classCallCheck(this, AlbumItem);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(AlbumItem).apply(this, arguments));
	  }

	  _createClass(AlbumItem, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'thumbnail' },
	        _react2.default.createElement(
	          'a',
	          { href: '/music/' + this.props.data._id, target: '_blank' },
	          _react2.default.createElement('img', { src: this.props.data.image, alt: this.props.data.title })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'caption' },
	          _react2.default.createElement(
	            'h5',
	            null,
	            this.props.data.title
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            this.props.data.singer
	          )
	        )
	      );
	    }
	  }]);

	  return AlbumItem;
	}(_react2.default.Component);
	/* 新碟榜展示内容组件--End */

	_reactDom2.default.render(_react2.default.createElement(NewAlbums, { source: '/musicindex?albumName=' }), document.getElementById('newAlbums'));

/***/ },

/***/ 160:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.TitleTop = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(158);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/* 榜单标题组件 */

	var TitleTop = exports.TitleTop = function (_React$Component) {
	  _inherits(TitleTop, _React$Component);

	  function TitleTop() {
	    _classCallCheck(this, TitleTop);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(TitleTop).apply(this, arguments));
	  }

	  _createClass(TitleTop, [{
	    key: 'render',
	    value: function render() {
	      var titleSelected = this.props.selected,
	          // 获取父组件中初始选取的标题
	      titleTop = this.props.titleTop,
	          // 获取父组件全部标题名称
	      titleList = [];

	      titleTop.forEach(function (titleItem, index) {
	        titleList.push(_react2.default.createElement(
	          'li',
	          { className: titleSelected === titleItem ? 'on' : '', key: index },
	          _react2.default.createElement(
	            'a',
	            { href: 'javascript:;', onClick: this.handleTitleChang.bind(this, titleItem) },
	            titleItem
	          )
	        ));
	      }.bind(this));
	      return _react2.default.createElement(
	        'ul',
	        null,
	        titleList
	      );
	    }
	  }, {
	    key: 'handleTitleChang',
	    value: function handleTitleChang(titleName) {
	      if (this.props.selected !== titleName) {
	        this.props.onDataChange(titleName);
	      }
	    }
	  }]);

	  return TitleTop;
	}(_react2.default.Component);
	/* 榜单标题组件--End */

	module.exports = TitleTop;

/***/ },

/***/ 161:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SongItem = exports.HotArtistSongs = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(158);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _TitleTop = __webpack_require__(160);

	var _TitleTop2 = _interopRequireDefault(_TitleTop);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/* 本周单曲榜整体区域组件 */

	var HotArtistSongs = exports.HotArtistSongs = function (_React$Component) {
	  _inherits(HotArtistSongs, _React$Component);

	  function HotArtistSongs() {
	    _classCallCheck(this, HotArtistSongs);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(HotArtistSongs).call(this));

	    _this.state = {
	      selected: '最热',
	      loading: true,
	      data: []
	    };
	    return _this;
	  }

	  _createClass(HotArtistSongs, [{
	    key: 'render',
	    value: function render() {
	      var artistList = [],
	          titleTop = ['最热', '摇滚', '民谣', '流行', '电子'];
	      if (!this.state.loading) {
	        var data = this.state.data;
	        if (data && data.musics) {
	          for (var i = 0, len = data.musics.length; i < Math.min(10, len); i++) {
	            artistList.push(_react2.default.createElement(SongItem, { data: data.musics[i], key: i, value: i + 1 }));
	          }
	        }
	      }
	      return _react2.default.createElement(
	        'div',
	        { className: 'billboard' },
	        _react2.default.createElement(
	          'div',
	          { className: 'billboard-hd' },
	          _react2.default.createElement(
	            'h4',
	            null,
	            '本周单曲榜'
	          ),
	          _react2.default.createElement(
	            'button',
	            { className: 'play-button' },
	            _react2.default.createElement('i', { className: 'glyphicon glyphicon-play' }),
	            _react2.default.createElement(
	              'span',
	              null,
	              '播放全部'
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'billboard-bd class-top' },
	          _react2.default.createElement(_TitleTop2.default, { titleTop: titleTop, selected: this.state.selected, onDataChange: this.getData.bind(this) })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'hotArtist-songs' },
	          _react2.default.createElement(
	            'ul',
	            null,
	            artistList
	          )
	        )
	      );
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var value = this.state.selected;
	      this.getData(value);
	    }
	  }, {
	    key: 'getData',
	    value: function getData(value) {
	      var url = this.props.source + encodeURIComponent('本周单曲榜' + value);
	      $.get(url, function (results) {
	        this.setState({
	          loading: false,
	          selected: value,
	          data: results.data
	        });
	      }.bind(this));
	    }
	  }]);

	  return HotArtistSongs;
	}(_react2.default.Component);
	/* 本周单曲榜整体区域组件--End */

	/* 新碟榜展示内容组件 */


	var SongItem = exports.SongItem = function (_React$Component2) {
	  _inherits(SongItem, _React$Component2);

	  function SongItem() {
	    _classCallCheck(this, SongItem);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(SongItem).apply(this, arguments));
	  }

	  _createClass(SongItem, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'li',
	        null,
	        _react2.default.createElement(
	          'a',
	          { href: '/music/' + this.props.data._id, target: '_blank' },
	          _react2.default.createElement('img', { src: this.props.data.image, alt: this.props.data.title }),
	          _react2.default.createElement(
	            'h5',
	            null,
	            this.props.data.title
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            this.props.data.singer
	          ),
	          _react2.default.createElement(
	            'span',
	            { className: 'order' },
	            this.props.value
	          )
	        )
	      );
	    }
	  }]);

	  return SongItem;
	}(_react2.default.Component);
	/* 新碟榜展示内容组件--End */

	_reactDom2.default.render(_react2.default.createElement(HotArtistSongs, { source: '/musicindex?hotSongs=' }), document.getElementById('hotArtistSongs'));

/***/ },

/***/ 162:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ProgrammeItem = exports.HotProgrammes = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(158);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _TitleTop = __webpack_require__(160);

	var _TitleTop2 = _interopRequireDefault(_TitleTop);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/* 近期热门歌单分类组件 */

	var HotProgrammes = exports.HotProgrammes = function (_React$Component) {
	  _inherits(HotProgrammes, _React$Component);

	  function HotProgrammes() {
	    _classCallCheck(this, HotProgrammes);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(HotProgrammes).call(this));

	    _this.state = {
	      selected: '最热',
	      loading: true,
	      data: [],
	      dataPro: null
	    };
	    return _this;
	  }

	  _createClass(HotProgrammes, [{
	    key: 'render',
	    value: function render() {
	      var programmeList = [],
	          titleTop = ['最热', '流行', '摇滚', '民谣', '原生'];
	      if (!this.state.loading) {
	        var dataCars = this.state.data;
	        var titleMore = "/music/results?pro=" + this.state.dataPro._id + "&p=0";
	        if (dataCars) {
	          for (var i = 0, len = dataCars.length; i < Math.min(6, len); i++) {
	            programmeList.push(_react2.default.createElement(ProgrammeItem, { dataCars: dataCars[i], key: i }));
	          }
	        }
	      }
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: 'class-top' },
	          _react2.default.createElement(
	            'span',
	            null,
	            '近期热门歌单'
	          ),
	          _react2.default.createElement(_TitleTop2.default, { titleTop: titleTop, selected: this.state.selected, onDataChange: this.getData.bind(this) }),
	          _react2.default.createElement(
	            'a',
	            { href: titleMore, target: '_blank', className: 'more' },
	            '更多'
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'screen' },
	          _react2.default.createElement(
	            'div',
	            { className: 'panel-body screen-body' },
	            programmeList
	          )
	        )
	      );
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var value = this.state.selected;
	      this.getData(value);
	    }
	  }, {
	    key: 'getData',
	    value: function getData(value) {
	      var url = this.props.source + encodeURIComponent('近期热门歌单' + value);
	      $.get(url, function (results) {
	        this.setState({
	          loading: false,
	          selected: value,
	          data: results.data,
	          dataPro: results.dataPro
	        });
	      }.bind(this));
	    }
	  }]);

	  return HotProgrammes;
	}(_react2.default.Component);
	/* 近期热门歌单分类组件--End */

	/* 近期热门歌单每个分类中的歌单组件 */


	var ProgrammeItem = exports.ProgrammeItem = function (_React$Component2) {
	  _inherits(ProgrammeItem, _React$Component2);

	  function ProgrammeItem() {
	    _classCallCheck(this, ProgrammeItem);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ProgrammeItem).apply(this, arguments));
	  }

	  _createClass(ProgrammeItem, [{
	    key: 'render',
	    value: function render() {
	      var dataMusics = this.props.dataCars.musics,
	          arrList = [];
	      for (var i = 0, len = dataMusics.length; i < Math.min(3, len); i++) {
	        arrList.push(_react2.default.createElement(
	          'a',
	          { key: i, href: '/music/' + dataMusics[i]._id, target: '_blank', title: dataMusics[i].title },
	          _react2.default.createElement(
	            'p',
	            { key: i },
	            i + 1 + '.' + dataMusics[i].title
	          )
	        ));
	      }
	      if (arrList.length > 2) {
	        arrList.push(_react2.default.createElement(
	          'span',
	          { key: this.props.dataCars._id },
	          '...'
	        ));
	      }
	      return _react2.default.createElement(
	        'div',
	        { className: 'thumbnail' },
	        _react2.default.createElement(
	          'div',
	          { className: 'inner' },
	          _react2.default.createElement(
	            'h5',
	            null,
	            this.props.dataCars.name
	          ),
	          _react2.default.createElement('img', { src: dataMusics[0] ? dataMusics[0].image : '',
	            alt: dataMusics[0] ? dataMusics[0].title : '',
	            style: dataMusics[0] ? { display: 'inline' } : { display: 'none' } }),
	          arrList
	        )
	      );
	    }
	  }]);

	  return ProgrammeItem;
	}(_react2.default.Component);
	/* 近期热门歌单每个分类中的歌单组件--End */

	_reactDom2.default.render(_react2.default.createElement(HotProgrammes, { source: '/musicindex?hotProName=' }), document.getElementById('hotProgrammes'));

/***/ }

});