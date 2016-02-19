webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.FliterTitle = exports.FliterMovieItem = exports.FliterMovies = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(158);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/* 选电影/选电视剧区域整体组件 */

	var FliterMovies = exports.FliterMovies = function (_React$Component) {
	  _inherits(FliterMovies, _React$Component);

	  function FliterMovies(props) {
	    _classCallCheck(this, FliterMovies);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FliterMovies).call(this, props));

	    _this.state = {
	      selected: '热门',
	      loading: true,
	      data: [],
	      filmTitle: ['热门', '最新', '经典', '豆瓣高分', '冷片佳作', '华语', '欧美', '韩国', '日本', '动作', '喜剧']
	    };
	    return _this;
	  }

	  _createClass(FliterMovies, [{
	    key: 'render',
	    value: function render() {
	      var filmList = [];
	      if (!this.state.loading) {
	        var data = this.state.data;
	        if (data && data.movies) {
	          data.movies.forEach(function (movieItem, index) {
	            filmList.push(_react2.default.createElement(FliterMovieItem, { data: movieItem, key: index }));
	          });
	        }
	      }
	      return _react2.default.createElement(
	        'div',
	        { className: 'screen' },
	        _react2.default.createElement(
	          'div',
	          { className: 'class-top' },
	          _react2.default.createElement(
	            'span',
	            { className: 'active' },
	            '选电影'
	          ),
	          _react2.default.createElement(
	            'i',
	            null,
	            ' / '
	          ),
	          _react2.default.createElement(
	            'span',
	            null,
	            '选电视剧'
	          ),
	          _react2.default.createElement('hr', null),
	          _react2.default.createElement(FliterTitle, { filmTitle: this.state.filmTitle, selected: this.state.selected,
	            onDataChange: this.getData.bind(this) }),
	          _react2.default.createElement('hr', null)
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'screen' },
	          _react2.default.createElement(
	            'div',
	            { className: 'panel panel-default' },
	            _react2.default.createElement(
	              'div',
	              { id: 'classNameBody', className: 'panel-body screen-body' },
	              filmList
	            )
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
	      var url = this.props.source + encodeURIComponent(value + '电影');
	      $.get(url, function (results) {
	        this.setState({
	          loading: false,
	          selected: value,
	          data: results.data
	        });
	      }.bind(this));
	    }
	  }]);

	  return FliterMovies;
	}(_react2.default.Component);
	/* 选电影/选电视剧区域整体组件--End */

	/* 选电影/选电视剧内容组件 */


	var FliterMovieItem = exports.FliterMovieItem = function (_React$Component2) {
	  _inherits(FliterMovieItem, _React$Component2);

	  function FliterMovieItem() {
	    _classCallCheck(this, FliterMovieItem);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(FliterMovieItem).apply(this, arguments));
	  }

	  _createClass(FliterMovieItem, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'col-md-3 col-xs-4' },
	        _react2.default.createElement(
	          'div',
	          { className: 'thumbnail' },
	          _react2.default.createElement(
	            'a',
	            { href: /movie/ + this.props.data._id, target: '_blank' },
	            _react2.default.createElement('img', { src: this.props.data.poster, alt: this.props.data.title })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'caption' },
	            _react2.default.createElement(
	              'h5',
	              null,
	              this.props.data.title
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return FliterMovieItem;
	}(_react2.default.Component);
	/* 选电影/选电视剧内容组件--End */

	/* 选电影/选电视剧标题组件 */


	var FliterTitle = exports.FliterTitle = function (_React$Component3) {
	  _inherits(FliterTitle, _React$Component3);

	  function FliterTitle(props) {
	    _classCallCheck(this, FliterTitle);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(FliterTitle).call(this, props));
	  }

	  _createClass(FliterTitle, [{
	    key: 'render',
	    value: function render() {
	      var titleSeleted = this.props.selected,
	          // 获取父组件中初始选取的标题
	      filmTitle = this.props.filmTitle,
	          // 获取父组件全部标题名称
	      titleList = [];

	      filmTitle.forEach(function (filmItem, index) {
	        titleList.push(_react2.default.createElement(
	          'li',
	          { key: index },
	          _react2.default.createElement(
	            'button',
	            {
	              className: titleSeleted === filmItem ? 'btn btn-primary' : 'btn btn-default',
	              key: index, onClick: this.handleTitleChang.bind(this, filmItem) },
	            filmItem
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

	  return FliterTitle;
	}(_react2.default.Component);
	/* 选电影/选电视剧标题组件--End */

	/* 添加选电影/选电视组件到节点中 */


	_reactDom2.default.render(_react2.default.createElement(FliterMovies, { source: '/?fliterName=' }), document.getElementById('fliterMovies'));

/***/ }
]);