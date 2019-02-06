# 介绍
<p align="left">
	<a href="https://webpack.js.org/">
		<img src="https://img.shields.io/badge/webpack-4.20.2-brightgreen.svg" alt="Webpack">
	</a>
	<a href="https://babeljs.io/">
		<img src="https://img.shields.io/badge/babel-7.1.2-brightgreen.svg" alt="babel">
	</a>
  <a href="https://github.com/BiYuqi/webpack-seed/tree/gh-pages">
    <img src="https://img.shields.io/travis/BiYuqi/webpack-seed.svg">
  </a>
  <a href="https://github.com/BiYuqi/webpack-seed/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License">
  </a>
  
</p>

开箱即用的多页面脚手架, 基于webpack4.2x babel7.1x模块化开发可复用的现代化网站, 解决非SPA应用, html复用, 模块化开发编译等问题.

**如果感兴趣该项目, 请点个 [star](https://github.com/BiYuqi/webpack-seed/stargazers)**

## 特性

- 支持前后端分离开发
- 配置完整的打包方案
- 支持本地开发热更新
- EJS 模板编译
- Base64 图片，雪碧图
- 内置Sass开发环境
- Autoprefixer自动补全
- 集成代码风格校验Eslint
- 内置字体图标库500+, 开箱即用
- 支持ES6编写源码，编译生成生产代码
- 开发(生产)环境代码自动注入页面, 专注于开发
- 编译后的程序不依赖于外部的资源, 可自动替换线上资源地址
- 开箱即用的单元测试环境(当然了,测试用例还得您自己写）
- ...

注：本项目不依赖Jquery. lib库引入jquery仅仅是为了演示该项目可以自动加载第三方脚本作为链接使用, 如果不需要,在src/common/libs.js配置文件中移除即可

## 目录结构

本项目已经为你生成了一个完整的开发体验，下面是整个项目的目录结构。

```bash
├── bin                        // 命令行生成页面相关
├── build                      // 构建相关
├── src                        // 源代码
│   ├── api                    // 所有请求
│   ├── common                 // 静态资源和共用js,css,images
│   ├── components             // 页面公用部分(header, footer)
│   ├── layout                 // 项目架构(实现整站结构，拼装header footer)
│   ├── templates              // 可复用的页面片段基于ejs
│   ├── vendor                 // 第三方库
│   └── views                  // 页面部分，一个文件夹为一个页面
├── test                       // 公用测试文件
├── .babelrc                   // babel-loader 配置
├── .eslintignore              // eslint忽略项
├── .eslintrc.js               // eslint 配置项
├── .gitignore                 // git 忽略项
├── .prettierignore            // 美化代码忽略项
├── .prettierrc                // 美化代码配置
├── .travis.yml                // 自动化CI配置
├── favicon.ico                // favicon图标
├── karma.conf.js              // 测试配置项
├── test.confg.js              // 测试配置入口
├── webpack.seed.common.js     // 全局配置项
└── package.json               // package.json
```
## 安装

```bash
# 克隆项目
git clone https://github.com/BiYuqi/webpack-seed.git

# 安装依赖
npm install

# 本地开发 启动项目
npm run dev
```

启动完成后会自动打开浏览器访问 http://localhost:9000， 你看到下面的页面就代表操作成功了。

![](/webpack-seed-site/home.png)

接下来你可以修改代码进行业务开发了，我们内建了简单的页面配置, 可直接编写业务逻辑, 你可以继续阅读和探索左侧的其他文档。

## Contribution

本文档项目地址 [webpack-seed-site](https://github.com/BiYuqi/webpack-seed-site) 基于 [vuepress](https://github.com/vuejs/vuepress)开发。

有任何修改和建议都可以该项目 pr 和 issue

[webpack-seed](https://github.com/BiYuqi/webpack-seed) 还在持续迭代中，逐步沉淀和总结出更多功能和相应的实现代码，总结开发中各种技术使用场景的最佳实践。本项目也十分期待你的参与和[反馈](https://github.com/BiYuqi/webpack-seed/issues)。