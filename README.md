使用NodeJs+MongoDB+React+ES6+jQuey+Webpack搭建的豆瓣电影音乐网站
================================================

简介:
---------------
该项目基于<a href="https://github.com/Loogeek/douban_Website" target="\_blank"> douban_Website</a>项目,尝试使用了React替换了原网页中部分用jQuery操作DOM的JS脚本，并使用Webpack实现简单的资源模块管理，并尝试了使用ES6完成React组件的编写，具体项目功能与<a href="https://github.com/Loogeek/douban_Website" target="\_blank"> douban_Website</a>中介绍无太多变化，可参考其Readme,同样可以参考使用Vue组件化开发来完成该案例<a href="https://github.com/Loogeek/douban-Vue" target="\_blank"> douban-Vue</a>。


项目整体效果
-------
<div>
  <img src="http://oh1orcwqb.bkt.clouddn.com/doubanMovie.jpeg" width="45%" float"left" height="700" alt="电影首页"/>
  <img src="http://oh1orcwqb.bkt.clouddn.com/doubanMusic.jpeg" width="45%" float"left" height="700" alt="音乐首页"/>
</div>
<div text-align="center">
  <img src="http://oh1orcwqb.bkt.clouddn.com/doubanDetail.jpeg" width="45%" alt="电影详情"/>
</div>

动态效果演示
-------
[动态效果演示](http://oh1orcwqb.bkt.clouddn.com/douban.gif)

注意
-------
修改public/components 目录下的组件代码时要运行**webpack -w** 命令对文件进行重新编译。

项目结构:
----
```
├── app.js                                项目入口文件
├── app                                   Node后端MVC文件目录
│   ├── controllers                       控制器目录
│   │   ├── movie                         电影页面控制器目录
│   │   ├── music                         音乐页面控制器目录
│   │   └── user                          用户列表控制器目录
│   ├── models                            模型目录
│   │   ├── movie
│   │   ├── music
│   │   └── user
│   ├── schemas                           模式目录
│   │   ├── movie
│   │   ├── music
│   │   └── user
│   └── views                             视图文件目录
│       ├── includes
│       └── pages
├── doubanDatabase                        供参考的数据库数据
│   └── douban
├── node_modules                          node模块目录
├── public                                静态文件目录
│   ├── images                            图片目录
│   │   ├── includes                      公共图片目录
│   │   ├── movie
│   │   ├── music
│   │   └── user
│   ├── libs                              经过gulp处理后文件所在目录
│   │   ├── css
│   │   ├── images
│   │   └── scripts
│   ├── sass                              样式目录
│   │   ├── include
│   │   ├── movie
│   │   └── music
│   ├── scripts                           JS脚本目录
│   │   ├── js                            jQuery脚本
│   │   └── components                    React组件目录
│   │       ├── movie
│   │       │   ├── ChooseMovieItem.jsx   选电影/电视剧区域子组件
│   │       │   ├── ChooseMovieTitle.jsx  选电影/电视剧区域标题组件
│   │       │   ├── ChooseMovies.jsx      选电影/电视剧区域父组件
│   │       │   └── movie_index.js        电影首页脚本
│   │       └── music
│   │           ├── ArtistSongItem.jsx    本周单曲榜区域子组件
│   │           ├── ArtistSongs.jsx       本周单曲榜区域父组件
│   │           ├── HotProgrammeItem.jsx  近期热门歌单子组件
│   │           ├── HotProgrammes.jsx     近期热门歌单父组件
│   │           ├── NewAlbumItem.jsx      新碟榜子组件
│   │           ├── NewAlbums.jsx         新碟榜父组件
│   │           ├── Title.jsx             标题组件
│   │           └── music_index.js        音乐首页脚本
│   └── upload                            用户自定义上传图片存储目录
│       ├── movie
│       └── music
├── route                                 路由目录
│   └── router.js
├── test                                  测试文件目录
│   └── user
│       └── user.js
├── README.md
├── gulpfile.js                           gulp文件
├── package.json
└── webpack.config.js                     webpack文件
```

后期完善:
-------
1. 部分功能还有待完善;
2. 部分功能还是基于jQuery对DOM的操作来完成，后期会尝试将全部功能都使用React进行改进重写。
3. 尝试使用React Native制作移动端App;
