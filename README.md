### 6月7日：搭建环境
`第一步：创建项目`
- npm install -g npx
- npx create-nuxt-app loveVueApp
使用 npx 可以帮助我们更快速的搭建项目环境，在你需要创建项目文件夹的地方 shift+鼠标右键 打开 powershell 窗口，执行上述命令。
安装完成后，会提示你执行如下命令：
- cd loveVueApp
- npm run dev
这里我们就执行`开发环境的指令`就好了
另附上，`生产环境的指令`：
cd loveVueApp
npm run build
npm run start
- 访问：http://localhost:3000/ 会有一个nuxtjs的图标出现，代表环境搭配成功

`第二步：处理babel`
增加 babel-node 处理（使用ES6的import指令问题）
在上文讲解 nuxtjs基础 我们是可以直接用 import 操作的，因为使用模板，里面增加了babel的处理，但当我们使用官方脚手架时，是没有增加babel处理的。需要手动解决。
- 在 dev 和 start 后面添加 --exec babel-node
```
"scripts": {
    "dev": "cross-env NODE_ENV=development nodemon server/index.js --watch server --exec babel-node",
    "build": "nuxt build",
    "start": "cross-env NODE_ENV=production node server/index.js --exec babel-node",
    "generate": "nuxt generate"
  },

```
- 然后，在根目录下创建一个 .babelrc 的配置文件，然后给它指定一个指令集
{
    "presets":["es2015"]
}
- 有了代码还不行，还要再安装插件，执行如下命令
npm install babel-preset-es2015
npm install babel-cli -S
- 好了，有了 babel-node 后我们就能启动服务程序了，改成了我们常用的 ES6语法了
npm run dev
- 访问：http://localhost:3000/ 会有一个nuxtjs的图标出现，代表环境搭配成功

`第三步：处理sass`
在style处添加lang="sass"会出现报错，因为没有添加sass-loader
- npm install sass-loader node-sass
出现警告，按照警告执行下述命令
- npm install sass@^1.3.0 fibers@>= 3.1.0
`第四部：修改nuxt.config.js中css的配置`
'element-ui/lib/theme-chalk/reset.css',

### 6月8日：项目开发第一天
`第一步：需求分析`
模板设计：解决复用性的问题
组件设计：如何把具象的组件抽象成灵活的合理的组件（拆分组件）
数据结构设计：vm模式主要依赖于数据和组件
接口设计：与数据结构相对应
`第二步：首页Header开发`
- 导入css，然后打开 nuxt.config.js 进行配置'@/assets/css/main.css'
- 设置vue组件模板 file->preferences->user snippets->vue.json进行设置
- emmet  HTML/css自动补全语法学习网址：http://code.z01.com/emmet/

- 开始为components下添加public文件夹并编写文件
- 开始geo(城市服务)、user(用户登录)、nav(导航栏)组件的编写
- 将geo、user、nav融合在topbar中
- 将topbar、searchbar(搜索栏)融合在index.vue中
到此完成首页头部部分
`第三步：首页菜单开发`
- 编写pages下的index.vue文件
- 编写components下的menu.vue(内容部分的左侧全部分类)
关键是注意以下几点：(解决办法看代码)
- 菜单分类中的每一项前有不同的图片，如何进行循环？
- 每一项后面的详细内容如何显示？
- 鼠标离开菜单，详细页不消失，离开详情页才消失，怎么实现？

`第四部：完成首页的其余部分`
- footer 以及life和slider基本都是静态的内容，非常简单


`思考与总结 `
#### 1.需要注意：根据页面的结构，分析、抽象，用最合适的dom容器写出来。

#### 2.dl ul ol 的区别？
- ul是无序列表，li做列表项，每一项的符号默认是小黑圆点；
- ol是有序列表，li做列表项，每一项的符号默认是数字;
- dl是自定义列表，dt放标题，dd放内容
ul与ol前的符号是可以修改的。只需要修改它们的type值。
- ul的type属性有：disc—实心圆(默认）、circle—空心圆、square—实心方块
- ol的type属性有：1—数字（默认）、a—小写字母、A—大写字母、i—小写希腊字母、I—大写希腊字母。
链接：https://www.jianshu.com/p/4807c9594846

#### 3.computed 计算属性？为什么要用计算属性，计算属性的原理是什么？

#### 4.v-for 中为什么要绑定key?

#### 5.为什么要用i标签？与em 的区别是什么？
在默认情况下，它们的视觉效果是一样的。但语义是不同的。 em标签表示其内容的着重强调，而 i标签表示从正常散文中区分出的文本，例如外来词，虚构人物的思想，或者当文本指的是一个词语的定义，而不是其语义含义。这意味着，正确使用哪一个取决于具体的场景。两者都不是纯粹为了装饰的目的，那是CSS样式所做的。

#### 6.常常将要v-for的内容或v-if的内容用<template></template>包起来。

### 6月9日 ：项目开发第二天
`第一步：实现用户注册页面`
- 新建pages下的register.vue并引入新建的blank模板 
element UI 表单验证的使用比较复杂，可以多参考register.vue中表单验证的使用。
`第二步:实现登录页面`
- 新建pages下的login.vue并引入新建的blank模板(简单)
`第三部：实现数据接口`
- 新建server下的dbs文件夹及文件
### 6月10日 ：项目开发的第三天


