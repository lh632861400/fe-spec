
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

export default {
  base: '/',
  description: 'aa',
  dynamicImport: false,
  exportStatic: {},
  mode: 'site',
  publicPath: '/',
  ssr: false,
  title: 'fe-spec',
  theme: {

  },
  // 单语言配置方式如下
  navs: [
    {
      title: 'GitHub',
      path: 'https://github.com/lh632861400/fe-spec',
    },
  ],
  routes: [
    {
      path: '/',
      routes: [

      ],
    },
  ],
}
