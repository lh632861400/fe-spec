
const menus = [
  {
    title: '开始使用',
    children: [
      // 菜单子项（可选）
      'index.md', // 对应的 Markdown 文件，路径是相对于 resolve.includes 目录识别的
    ],
  },
  {
    title: 'html规范',
    children: [
      // 菜单子项（可选）
      'html/code-spec.md', // 对应的 Markdown 文件，路径是相对于 resolve.includes 目录识别的
    ],
  },
];

const aa = [
  {
    "title":"快速开始",
    "path":"/guide/introduce",
    "meta":{"order":0},
    "children":[
      {"path":"/guide/introduce.html","title":"概览","meta":{}}
    ]
  },
  {
    "title":"html规范",
    "path":"/guide/html",
    "meta":{"order":1},
    "children":[
      {"path":"/guide/html/code-spec.html","title":"代码规范","meta":{}},
      {"path":"/guide/html/code-style.html","title":"代码风格","meta":{}}
    ]
  },
  {
    "title":"css规范",
    "path":"/guide/css",
    "meta":{"order":2},
    "children":[
      {"path":"/guide/css/code-spec.html","title":"代码规范","meta":{"order":1}},
      {"path":"/guide/css/code-style.html","title":"代码风格","meta":{"order":1}},
      {"path":"/guide/css/annotation-spec.html","title":"注释规范","meta":{"order":2}}
    ]
  },
  {
    "title":"Js",
    "path":"/guide/js",
    "meta":{"order":2},
    "children":[
      {"path":"/guide/js/code-spec.html","title":"代码规范","meta":{}},
      {"path":"/guide/js/code-style.html","title":"代码风格","meta":{}}
    ]
  },
  {
    "title":"命名规范",
    "path":"/guide/name",
    "meta":{"order":4},
    "children":[
      {"path":"/guide/name/directory-name.html","title":"目录命名规范","meta":{}}]},
  {
    "title":"git 协同与提交规范",
    "path":"/guide/git",
    "meta":{"order":5},
    "children":[{"path":"/guide/git.html","title":"git 提交规范","meta":{}},{"path":"/guide/git/gitignore.html","title":".gitignore 文件","meta":{}}]},{"title":"Img","path":"/guide/img","meta":{},"children":[{"path":"/guide/img/img-format.html","title":"图片格式","meta":{}},{"path":"/guide/img/img-link.html","title":"图片引入","meta":{}},{"path":"/guide/img/img-quality.html","title":"图片质量","meta":{}},{"path":"/guide/img/img-size.html","title":"移动网络","meta":{}}]}]

export default {
  base: '/',
  description: 'aa',
  dynamicImport: {

  },
  exportStatic: {
    htmlSuffix: true,
  },
  mode: 'site',
  publicPath: '/',
  ssr: false,
  title: 'fe-spec',
  theme: {

  },

  // 单语言配置方式如下
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/lh632861400/fe-spec',
    },
  ],
}
