import { defineComponent as e, openBlock as t, createElementBlock as n } from "vue";
const o = {
  class: "verney-ui-input__wrapper",
  placeholder: "input 组件"
}, p = e({ name: "vn-input" }), s = /* @__PURE__ */ e({
  ...p,
  setup(_) {
    return (r, c) => (t(), n("input", o));
  }
});
export {
  s as default
};
