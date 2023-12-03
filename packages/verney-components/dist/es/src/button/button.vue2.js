import { defineComponent as t, onMounted as o, openBlock as e, createElementBlock as n } from "vue";
import { addFn as r } from "@verney-design/utils";
const _ = { class: "verney-ui-button__wrapper" }, c = {
  name: "Button"
}, m = /* @__PURE__ */ t({
  ...c,
  setup(u) {
    return o(() => {
      console.log("==button==mounted", r(1, 2));
    }), (s, a) => (e(), n("div", _, "button 组件"));
  }
});
export {
  m as default
};
