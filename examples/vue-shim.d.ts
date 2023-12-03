
// TypeScriptTS默认只认ES 模块
// 如果你要导入.vue文件就要declare module把他们声明出来
declare module '*.vue' {
    import type { DefineComponent } from "vue";
    const component:DefineComponent<{},{},any>
}
