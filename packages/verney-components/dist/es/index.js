import a from "./src/index.js";
import { default as s } from "./src/button/index.js";
import { default as u } from "./src/input/index.js";
const r = {
  install: (t) => {
    a.forEach((o) => t.use(o));
  }
};
export {
  s as VnButton,
  u as VnInput,
  r as default
};
