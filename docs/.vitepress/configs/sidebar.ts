
import uiSideBar from "../pages/ui.json"
import cliSideBar from "../pages/cli.json"
import utilsSideBar from "../pages/utils.json"

export default {
  '/pages/guide/': [
    {
      text: '快速开始',
      "collapsible": true,
      "collapsed": false,
      items: [
        { text: 'verney-ui', link: '/pages/guide/ui' },
        { text: 'verney-vite-cli', link: '/pages/guide/cli' },
        { text: 'verney-utils', link: '/pages/guide/utils' },
      ]
    },
    {
      text: '开发者指南',
      "collapsible": true,
      "collapsed": false,
      items: [
        { text: 'docs项目', link: '/pages/guide/dev' },
        { text: 'vitepress', link: 'https://vitejs.cn/vitepress' },
        { text: 'vite', link: 'https://cn.vitejs.dev/' },
        { text: 'vue3', link: 'https://v3.cn.vuejs.org/' },
      ]
    },
    {
        text: '第三方组件库',
        "collapsible": true,
        "collapsed": false,
        items: [
          { text: 'element-plus', link: 'https://element-plus.org' },
          { text: 'element-ui', link: 'https://element.eleme.cn' },
          { text: 'ant-design', link: 'https://ant.design' },
          { text: 'vant', link: 'https://vant-ui.github.io/vant' },
        ]
      }
  ],
  '/pages/comps/ui/': uiSideBar,
  '/pages/comps/cli/': cliSideBar,
  '/pages/comps/utils/': utilsSideBar,
}