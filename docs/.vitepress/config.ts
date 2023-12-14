
import nav from './configs/nav'
import sidebar from './configs/sidebar'
import footer from './configs/footer'

export default {
title: 'verney-vue-design', // 站点的标题
  description: 'verney-vue-design前端组件库', // 站点的描述,将作为<meta>标记渲染在页面HTML中
  appearance: true, // 允许默认的颜色主题切换
  base: '/', // base URL; 如果计划将站点部署到https://foo.github.io/bar/,那么需要设置base为'/bar/'
//   lang: 'en-US', // 设置语言, 这个属性将作为<html lang="en-US">标记渲染到页面HTML中。
// head: 额外的需要被注入到当前页面的HTML<head>中的标签,每个标签都可以以 [tagName, { attrName: attrValue }, innerHTML?] 的格式指定
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/logo/favicon.svg'
      }
    ]
  ],
  // 主题配置
  themeConfig: {
    logo: '/logo/favicon.svg', // 导航栏logo
    nav, // 顶部导航
    sidebar, // 侧边栏
    footer // 页脚
  }
}