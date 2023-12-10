import { defineComponent as t, onMounted as o, openBlock as n, createElementBlock as e } from "vue";
import { addFn as r } from "@verney-design/utils";
const _ = { class: "verney-ui-button__wrapper" }, u = t({ name: "vn-button" }), d = /* @__PURE__ */ t({
  ...u,
  setup(c) {
    return o(() => {
      console.log("==button==mounted", r(1, 2));
    }), (s, a) => (n(), e("button", _, "button 组件"));
  }
});
export {
  d as default
};
