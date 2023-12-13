

import { App } from "vue";

import comps from './src/index'; // 获取上面默认导出的组件数组

export * from "./src/index"; // 会把所有的非default导出

// 默认导出install方法，方便app.use全局挂载
export default {
  install: (app: App) => {
    comps.forEach((c) => app.use(c));
  },
};
