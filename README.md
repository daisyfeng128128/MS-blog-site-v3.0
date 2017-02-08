# MS-blog-site-v3.0
a blog site by Stan_Lee using node.js as Server,react as FE,mysql as Database

##【关于此项目】 ##
本项目基于上两个版本，在原先两个版本上进行修改，可点击以下两个链接查看源码及说明。

【ver 1.0】 

访问地址： https://monkingstand.github.io/ 

源码及说明： https://github.com/MonkingStand/MonkingStand.github.io

【ver 2.0】 

访问地址： **网站上线没几天，被黑了，服务只租了一个月的，后续就不管了，暂时没有线上访问地址**

源码及说明： https://github.com/MonkingStand/MS-blog-site

【ver 3.0】

此项目做了进一步的改进，用nodejs作为后台服务器运行环境，数据库使用mysql，路由采用express模块框架进行搭建，关于数据获取，完全采用ajax异步获取的方式（和2.0版本区别不大，可以说基本一样），只是在前端部分，用的react动态js框架生成的html。

###补充说明###

因为3.0这个版本是在2.0的基础上改的，所以很多东西没设计好（jquery和jquery-ui依旧在用，还是用的静态资源引入，完全浪费了nodejs；关于css样式部分，因为index页面和home页面的样式部分重复冲突了，所以index页面部分用了行内样式，没有把这部分的css打包压缩进来），还有一些其他的小问题，杂七杂八还有好多，因为是当做练手项目，暂时也没考虑太多，正常能运行就好。
