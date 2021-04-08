---
title: Vue代码规范
group:
  title: Vue规范
  order: 6
---
## 目录规范
### 【建议】实例（vue-cli 3.x创建的项目）
<pre>
├─ .browserslistrc          // 浏览器兼容配置文件
├─ .editorconfig            // 编辑风格配置，格式：https://editorconfig.org/
├─ .env                     // 环境变量配置，所有环境都会引入。以下.env开头的文件均是vue-cli3提供的可配置的环境变量
├─ .env.development         // 本地开发环境
├─ .env.prodev              // 线上开发环境
├─ .env.production          // 线上正式环境
├─ .env.protest             // 线上测试环境
├─ .eslintignore            // eslint 忽略列表
├─ .eslintrc.js             // eslint 配置
├─ babel.config.js          // babel 配置
├─ package-lock.json        // npm 依赖记录
├─ package.json             // npm 包管理
├─ postcss.config.js        // postcss配置
├─ README.md                // 项目说明文件
├─ vue.config.js            // vue-cli 自定义配置
├─ webpack.dll.config.js    // webpack Dllplugin 打包配置文件
├─ build                    // 自定义构建
│  └─postcss-plugins        // postcss 自定义插件
├─ dist                     // 打包输出目录
├─ docs                     // 项目文档
├─ mock                     // 开发环境模拟数据配置
├─ node_modules             // 依赖项
├─ public                   // 静态资源文件，打包会拷贝到输出目录
└─ src                      // 源文件
    ├─ api/services         // 接口请求模块
    ├─ assets               // 资源文件
    |  ├─ fonts             // 字体库（iconfont、自定义字体等）
    |  └─ image             // 图片
    ├─ components           // 组件库
    |  ├─ business          // 业务组件
    |  └─ common            // 公共组件
    ├─ config               // 业务模块中涉及到的可提取的公共配置
    ├─ directive            // vue 指令
    ├─ filters              // vue 过滤器
    ├─ mixins               // vue 混合
    ├─ model                // 业务模块
    ├─ plugins              // 第三方插件
    ├─ router               // 路由
    ├─ store                // vuex store（统一的数据管理）
    ├─ styles               // 样式
    ├─ utils                // 工具模块
    └─ views/pages          // 页面级组件（每个页面需要有单独的文件夹，文件夹下只能有1个index.vue文件，可包含其他文件夹）
</pre>   
 
## 代码分布
### 【建议】推荐在.vue文件中从上到下依次是template、javascript、css这样三块的分布，并且在javascript这块推荐按照如下顺序：
<pre>
export default {
  name: "",
  
  mixins: [],
  directives: {},
  filters: {},
  components: {},
  
  props: {},
  data() {},
  computed: {},
  
  watch: {},
  mounted() {},
  methods: {}
}
</pre>
为什么要按这么个顺序分布？
name这个属性作为组件的标识，放在第一个天经地义，无需解释。

mixins、directives、filters、components这些属性，都是资源或组合类的，有点注入的感觉，不会太多太长，而且别人阅读你这个源码时第一时间也会想知道你依赖于哪些外部资源，所以这几个属性放在前面。如果组件有provide/inject，也是放在这块。

props、data、computed，都是当前组件的数据源，先有数据再有对数据的操作动作，这样代码阅读起来不会觉得很突兀。

最后才是当前组件中会有的动作，包括watch、mounted、methods，一般都是一些方法，而且代码量都会比较大占用篇幅较长，所以放在整个js模块的最后，如果组件还需要其他的钩子函数，如beforeCreated、created、destory等，都按照相当于mounted的执行顺序放在之前或之后的位置。
