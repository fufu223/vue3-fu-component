import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "漆黑烈焰使的博客",
  description: "A VitePress Site",
  lang: 'zh-CN',
  base: '/dark-flame-master/',// 部署时记得加上github子路径

  // 主题相关配置
  themeConfig: {
    logo: '/logo.webp',
    i18nRouting: true,
    siteTitle: '漆黑烈焰使的博客',

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '后端', link: '/backend/java-se' },
      { text: '前端', link: '/frontend/html-css' },
      { text: '算法', link: '/api-examples' },
      { text: '工具', link: 'https://github.com/...' },
      { text: '日志', link: '/log/' },
      {
        text: '学习网站',
        items: [
          { text: 'Bilibili', link: 'https://www.bilibili.com/' },
          { text: 'GitHub', link: 'https://github.com/' },
          { text: 'Twitter', link: 'https://twitter.com/' }
        ]
      }
    ],
    sidebar: {
      '/backend': [
        {
          text: '后端路线',
          // 折叠侧边栏
          collapsed: true,
          items: [
            { text: 'JavaSE', link: '/backend/java-se' },
            { text: 'Spring', link: '/backend/spring' },
            { text: 'JavaScript', link: '/backend/spring-mvc' },
          ]
        }
      ],
      'frontend': [
        {
          text: '前端路线',
          items: [
            { text: 'Html&Css', link: '/frontend/html-css'},
            { text: 'JavaScript', link: '/frontend/javascript' },
            { text: 'Vue', link: '/frontend/vue' },
            { text: 'React', link: '/frontend/react' },
          ]
        }
      ],
      '/markdown-examples': [
        {
          text: 'Markdown Examples',
          items: [
            { text: 'Markdown Examples', link: '/markdown-examples' },
            { text: 'Runtime API Examples', link: '/api-examples' },
          ]
        }
      ],
    },

    // 社交链接(展示带有图标的社交帐户链接)
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'youtube', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'x', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'discord', link: 'https://github.com/vuejs/vitepress' },
      // 可以通过将 SVG 作为字符串传递来添加自定义图标：
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>csdn</title><path d="M12...6.38z"/></svg>'
        },
        link: 'https://blog.csdn.net/qq_47953855?spm=1000.2115.3001.5343',
        // 也可以为无障碍添加一个自定义标签 (可选但推荐):
        ariaLabel: 'cool link'
      }
    ],

    // 编辑链接(当你在VitePress中启用了editLink配置后，每个页面的底部都会出现一个链接，指向GitHub上对应的文件编辑页面。path是对应文件的路径)
    editLink: {
      pattern: 'https://github.com/fufu223/vue3-fu-component/:path',
      text: '在Github上编辑此页'
    },

    // 页脚配置。可以添加 message 和 copyright。由于设计原因，仅当页面不包含侧边栏时才会显示页脚。
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024漆黑烈焰使'
    }
  }
})
