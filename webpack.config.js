// 使用插件将组件中相同部分抽成一个单独文件
var webpack = require('webpack'),
    CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin"),
    uglifyJsPlugin = webpack.optimize.UglifyJsPlugin,
    path = require('path');

module.exports = {
  entry: {
    'movieBundle': './public/scripts/component/movie/FliterMovies.jsx',
    'musicBundle': [
      './public/scripts/component/music/NewAlbums.jsx',
      './public/scripts/component/music/HotArtistSongs.jsx',
      './public/scripts/component/music/HotProgrammes.jsx'
    ]
  },
  output: {
    path: path.join(__dirname, '/public/dist/scripts/component'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  plugins: [
    // 使用插件将组件中相同部分抽成一个单独文件
    new CommonsChunkPlugin('componentInit.js', ['movieBundle', 'musicBundle']),
    // 代码压缩
    // new uglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // })
  ]
}
