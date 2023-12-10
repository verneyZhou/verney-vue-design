<template>
    <button class='verney-ui-button__wrapper'>button 组件</button>
</template>

<!-- <script lang='ts'>
export default {
    name: ' ', //   
};
</script> -->
<script setup lang='ts'>
defineOptions({ name: "vn-button" }); // 组件名称
import {addFn} from '@verney-design/utils' // 导入工具函数

import { onMounted } from 'vue';

onMounted(() => {
    console.log('==button==mounted', addFn(1, 2)); // 打印工具函数
});
</script>
<style lang='less' scoped>
// 组件样式
.verney-ui-button__wrapper {
    color: #ccc;
}
</style>