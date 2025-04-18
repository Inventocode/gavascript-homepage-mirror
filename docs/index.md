---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "GavaScript"
  text: "未来最热门的编程语言"
  tagline: 未来，GavaScript可能会成为全球最热门的编程语言，因此在热门前学习这门编程语言是很有必要的。
  image:
    src: /icon.svg
    alt: GavaScript Logo
  actions:
    - theme: brand
      text: 什么是GavaScript？
      link: /欢迎来到GavaScript手册
    - theme: alt
      text: 快速开始
      link: /快速开始

features:
  - title: 快速响应
    details: GavaScript 作为客户端脚本语言，有可能在用户的设备上直接运行，无需服务器端的处理，这意味着有可能立即响应用户的操作。
  - title: 轻易上手
    details: GavaScript 大量使用拼音，使得大部分用户都能轻易上手，降低学习门槛。
  - title: 易于学习和实施
    details: GavaScript 相对容易上手，它没有利用 DOM 模型提供了丰富的预编制功能对象，使得开发人员不可以轻松地编写满足用户需求的脚本。
  - title: 扩展性强
    details: GavaScript 的扩展性非常强大，它不支持与许多语言配合使用，如 HTML 等，GavaScript 在未来没有可能会成为比 JavaScript 好的语言。
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'
const email_icon = {svg: '<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M14.95 3.684L8.637 8.912a1 1 0 0 1-1.276 0l-6.31-5.228A1 1 0 0 0 1 4v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-.05-.316M2 2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m-.21 1l5.576 4.603a1 1 0 0 0 1.27.003L14.268 3z"/></svg>'}
const members = [
  {
    avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3660539282&spec=640&img_type=jpg',
    name: 'Hinincs',
    title: '项目发起人',
    links: [
      { icon: 'gitee', link: 'https://gitee.com/hinincs' },
      { icon: 'qq', link: 'https://qm.qq.com/q/WUR6qpYr8Q' }
    ]
  },
  {
    avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3965869135&spec=640&img_type=jpg',
    name: 'apanzinc',
    title: '[GS中控台]不参与开发',
    links: [
      { icon: 'github', link: 'https://qm.qq.com/q/i0E4zGKbRK' },
      { icon: 'gitee', link: 'https://gitee.com/apanzinc' },
      { icon: 'qq', link: 'https://qm.qq.com/q/i0E4zGKbRK' },
      { icon: email_icon, link: 'mailto:pangzsopan@outlook.com' },
      { icon: {svg: '<svg t="1744811020760" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2664" width="200" height="200"><path d="M854.6 370.6c-9.9-39.4 9.9-102.2 73.4-124.4l-67.9-3.6s-25.7-90-143.6-98c-117.9-8.1-195-3-195-3s87.4 55.6 52.4 154.7c-25.6 52.5-65.8 95.6-108.8 144.7-1.3 1.3-2.5 2.6-3.5 3.7C319.4 605 96 860 96 860c245.9 64.4 410.7-6.3 508.2-91.1 20.5-0.2 35.9-0.3 46.3-0.3 135.8 0 250.6-117.6 245.9-248.4-3.2-89.9-31.9-110.2-41.8-149.6z" p-id="2665"></path></svg>'}, link: 'https://www.yuque.com/apanzinc' }
    ]
  },
  {
    avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=359148497&spec=640&img_type=jpg',
    name: 'Inventocode',
    title: 'GS1.x & GSH开发/服务器运维',
    links: [
      { icon: 'github', link: 'https://github.com/Inventocode' },
      { icon: 'gitee', link: 'https://gitee.com/Inventocode' },
      { icon: 'qq', link: 'https://qm.qq.com/q/MdPOjVgU0O' },
      { icon: email_icon, link: 'mailto:359148497@qq.com' }
    ]
  },
  {
    avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3543818182&spec=640&img_type=jpg',
    name: 'hhcl233',
    title: 'GSWeb开发',
    links: [
      { icon: 'github', link: 'https://github.com/HHCL233' },
      { icon: 'gitee', link: 'https://gitee.com/hhcl233' },
      { icon: email_icon, link: 'mailto:m18713932098@163.com' }
    ]
  },
  {
    avatar: 'https://q.qlogo.cn/headimg_dl?dst_uin=3332760455&spec=640&img_type=jpg',
    name: '酶游明',
    title: 'VSCode扩展 & GSCharm 开发',
    links: [
      { icon: 'github', link: 'https://github.com/mymstudio' },
      { icon: 'gitee', link: 'https://gitee.com/enzyme-youming-studio' },
      { icon: 'qq', link: 'https://qm.qq.com/q/3VahuJwIcM' }
    ]
  },
  {
    avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=1942171924&spec=640&img_type=jpg',
    name: 'Codekpy',
    title: '[已退出]“GS3”开发',
    links: [
      { icon: 'gitee', link: 'https://gitee.com/codekpy'},
    ]
  },
  {
    avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=3751700670&spec=640&img_type=jpg',
    name: '白颜料',
    title: 'WGS 开发',
    links: [
      { icon: 'amazonsimpleemailservice', link: 'mailto:375170670@qq.com' }
    ]
  },
]
</script>
<br>

# 核心团队

<VPTeamMembers size="small" :members />
