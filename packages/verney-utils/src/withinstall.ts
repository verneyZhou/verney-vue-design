
import type { App, Plugin } from "vue"
export type SFCWithInstall<T> = T & Plugin

// 为了解决组件的全局注册，写一个高阶函数:
// 这个函数接收一个组件，然后返回一个新的组件，这个新的组件上有install方法，install方法就是全局注册组件的方法
export default <T>(comp: T) => {
    (comp as SFCWithInstall<T>).install = (app: App) => {
        // 当组件是 script setup 的形式时，会自动以为文件名注册，会挂载到组件的__name 属性上，所以要加上这个条件
        const name = (comp as any).name || (comp as any).__name
        //注册组件
        app.component(name, comp as SFCWithInstall<T>)
    }
    return comp as SFCWithInstall<T>
}