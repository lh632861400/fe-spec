
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
  menus: {
    // 需要自定义侧边菜单的路径，没有配置的路径还是会使用自动生成的配置
    "/": [
      {
        title: '概览',
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
    ],
  },
}