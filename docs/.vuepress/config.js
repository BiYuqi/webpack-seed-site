module.exports = {
  title: 'webpack-seed',
  description: 'A multi-page application (MPA) tools base on webpack4 and babel7. It\'s easy to use and custom set up. make you focus on business code writing. The project is not dependence vueJs, AngularJs or ReactJs.',
  base: '/webpack-seed-site/',
  port: 9001,
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico'
      }
    ]
  ],
  themeConfig: {
    navBar: false,
    repo: 'https://github.com/BiYuqi/webpack-seed',
    editLinks: false,
    sidebar: {
      '/guide/': [
        {
          title: '基础',
          collapsable: false,
          children: genEssentialsSidebar()
        },
        // {
        //   title: '进阶',
        //   collapsable: false,
        //   children: genAdvancedSidebar('/zh')
        // },
        // {
        //   title: '其它',
        //   collapsable: false,
        //   children: [
        //     '/zh/guide/other/faq.md',
        //     '/zh/guide/other/release-notes.md'
        //   ]
        // }
      ]
    }
  }
}

function genEssentialsSidebar(type = '') {
  const mapArr = [
    '/guide/',
    '/guide/essentials/layout.md',
    // '/guide/essentials/router-and-nav.md',
    // '/guide/essentials/permission.md',
    // '/guide/essentials/tags-view.md',
    // '/guide/essentials/new-page.md',
    // '/guide/essentials/style.md',
    // '/guide/essentials/server.md',
    // '/guide/essentials/mock-api.md',
    // '/guide/essentials/import.md',
    // '/guide/essentials/deploy.md'
  ]
  return mapArr.map(i => {
    return type + i
  })
}