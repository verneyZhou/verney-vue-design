import a from "./src/index.js";
import { default as p } from "./src/button/index.js";
import { default as l } from "./src/input/index.js";
const r = {
  install: (t) => {
    a.forEach((o) => t.use(o));
  }
};
export {
  p as Button,
  l as Input,
  r as default
};
