<a href="https://github.com/seajs/seajs" target="_blank">seajs</a>2.0
========

seajs&amp;spm2.0搭建的项目

js/app/src是源码目录，其中main为主模块，依赖a b模块，b模块依赖c模块，a b c模块均依赖jquery模块，jquery和jquery-migrate通过shim插件加载。

Grunt相关的模块因为太大，所以删掉了。项目down下来后命令行进入app目录 npm install 安装Grunt相关功能模块，spm build 执行打包。（前提是你有装Grunt，node npm，spm）

<a href="http://0hao.github.com" target="_blank">0hao.github.com</a>
