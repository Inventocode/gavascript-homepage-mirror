import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "GavaScript",
  description: "未来最热门的编程语言",
  srcDir: './docs',
  lastUpdated: true,
  locales: {
    root: {
      label: 'Chinese',
      lang: 'zh'
    }
  },
  themeConfig: {
    outline: {
      label: '目录'
    },
    logo: '/icon.svg',
    nav: [
      { text: '主页', link: '/' },
      { text: '下载', link: '/download' }
    ],
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium',
      }
    },
    sidebar: [
      { text: '🎉 欢迎来到GavaScript手册！', link: '/欢迎来到GavaScript手册' },
      { text: '快速开始', link: '/快速开始' },
      { text: '许可条款', link: '/许可条款' },
      { text: 'GavaScript之禅', link: '/GavaScript之禅' },
      {
        text: 'GavaScript 1.x',
        collapsed: false,
        items: [
          { text: '更新日志', link: '/GavaScript 1.x/更新日志' },
          { text: '插件', link: '/GavaScript 1.x/插件' },
          { text: 'CLI', link: '/GavaScript 1.x/CLI' },
          { text: '', link: '' },
        ]
      },
      {
        text: 'GavaScript-Web',
        collapsed: false,
        items: [
          { text: '更新日志', link: '/GavaScript-Web/更新日志' },
          { text: '', link: '' },
        ]
      },
      {
        text: '建议与反馈', 
        collapsed: false,
        items: [
          { text: '反馈查询', link: 'https://ccnqubr58jmo.feishu.cn/share/base/view/shrcnzq7Rvf9NxJKRPUOxW5YUxe' },
          { text: '提交反馈', link: 'https://ccnqubr58jmo.feishu.cn/share/base/form/shrcncDoBEosgzREGYQLK7nclyh' },
        ]
      },
      {
        text: '交流群',
        collapsed: false,
        items: [
          { text: '群规', link: '/交流群/群规' },
          { text: '违规记录1', link: '' },
          { text: '违规记录2', link: '' },
        ]
      }
    ],
    footer: {
      message: '基于 <a href="https://creativecommons.org/licenses/by-nc/4.0/legalcode.zh-hans">CC BY-NC 4.0</a> 许可发布',
      copyright: '版权所有 © 2025 GavaScript 开发团队'
    },
    socialLinks: [
      { icon: 'gitee', link: 'https://gitee.com/gavascript-dev/' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/3546590964877928' },
      { icon: 'afdian', link: 'https://afdian.com/a/gavascript' },
      { icon: 'qq', link: 'https://qm.qq.com/q/rKS0ZPrkis' }
    ],
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索'
              },
              modal: {
                displayDetails: '显示详细列表',
                resetButtonTitle: '重置搜索',
                backButtonTitle: '关闭搜索',
                noResultsText: '没有结果',
                footer: {
                  selectText: '选择',
                  selectKeyAriaLabel: '输入',
                  navigateText: '导航',
                  navigateUpKeyAriaLabel: '上箭头',
                  navigateDownKeyAriaLabel: '下箭头',
                  closeText: '关闭',
                  closeKeyAriaLabel: 'esc'
                }
              }
            }
          }
        }
      }
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    }
  },
  markdown: {
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    }
  }
})
