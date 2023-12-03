

import { App } from "vue";

import comps from './src/index';

export * from "./src/index"; // 导出


export default {
  install: (app: App) => {
    comps.forEach((c) => app.use(c));
  },
};
