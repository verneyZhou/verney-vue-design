import { defineComponent as o, computed as u, onMounted as p, openBlock as s, createElementBlock as a, normalizeClass as l, createTextVNode as c, renderSlot as m } from "vue";
import { addFn as d } from "@verney-design/utils";
import { buttonProps as _ } from "./types.js";
const b = o({ name: "vn-button" }), k = /* @__PURE__ */ o({
  ...b,
  props: _,
  setup(e) {
    const t = e, n = u(() => t.type ? `vn-button__${t.type}` : "");
    return p(() => {
      console.log("==button==mounted", d(1, 2));
    }), (r, f) => (s(), a("button", {
      class: l(["verney-ui-button__wrapper", n.value])
    }, [
      c(" button 组件 "),
      m(r.$slots, "default", {}, void 0, !0)
    ], 2));
  }
});
export {
  k as default
};
