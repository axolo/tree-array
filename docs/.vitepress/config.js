export default {
  title: 'tree-array',
  description: 'An array have children key and parentId key like tree.',
  base: '/tree-array/',
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: 'tree.svg' }]
  ],
  themeConfig: {
    logo: '/tree.svg',
    lastUpdatedText: '最近更新',
    search: {
      provider: 'local'
    },
    socialLinks: [{
      icon: 'github',
      link: 'https://github.com/axolo/tree-array'
    }],
    footer: {
      message: '@axolo/tree-array',
      copyright: '©2022 MIT License'
    },
    sidebar: [{
      text: '简介',
      link: '/intro'
    }, {
      text: '通用参数',
      link: '/param'
    }, {
      text: '功能',
      items: [
        { text: 'randomId', link: '/randomId' },
        { text: 'array2tree', link: '/array2tree' },
        { text: 'arrayTrace', link: '/arrayTrace' },
        { text: 'arrayDeep', link: '/arrayDeep' },
        { text: 'arrayNode', link: '/arrayNode' },
        { text: 'tree2array', link: '/tree2array' },
        { text: 'treeFilter', link: '/treeFilter' },
        { text: 'treeDeep', link: '/treeDeep' },
        { text: 'treeNode', link: '/treeNode' },
        { text: 'treePath', link: '/treePath' },
        { text: 'treeSub', link: '/treeSub' }
      ]
    }]
  }
}