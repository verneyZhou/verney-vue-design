import { App, Component, h } from 'vue'
import Theme from 'vitepress/theme'
import '../styles/custom-style.css' // 对vitepress主题样式的覆盖
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import { globals } from '../components'

import VerneyUI from '@verney-design/ui'


import Documate from '@documate/vue'
import '@documate/vue/dist/style.css'

export default {
  ...Theme,
  // 添加Documate UI
  Layout: h(Theme.Layout, null, {
    'nav-bar-content-before': () => h(Documate, {
      endpoint: 'https://4ztzgn1cxw.us.aircode.run/ask',
    }),
  }),
  enhanceApp ({ app }: {app: App}) {
    // 全局注册组件
    app.use(VerneyUI)
    globals.forEach((comp: Component) => {
      app.component(comp.name as string, comp)
    })
  }
}