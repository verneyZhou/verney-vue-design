# Table 表格

## 自定义列表格

自定义列表格用法展示。可通过  `default-columns` 控制默认显示列，如果不传，或者传空数组，则首次加载默认加载全部列。

<vp-demo
    demo-height="270px"
    source-code="ui:::table"
    demo-name="table"
/>


## Table 属性



| 属性                      | 说明                                                     | 类型           | 可选值     | 默认值         |
| ------------------------ | -------------------------------------------------------- | ------------- | --------- | ------------- |
| default-columns          | 自定义列模式中，默认选中的列。注意需要传入 `label` 的值。          | array         | -         | []          |