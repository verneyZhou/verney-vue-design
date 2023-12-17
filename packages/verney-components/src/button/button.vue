<template>
    <button class="verney-ui-button__wrapper" :class="buttonStyle">
        button 组件
        <slot />
    </button>
</template>

<!-- <script lang='ts'>
export default {
    name: ' ', //   
};
</script> -->
<script setup lang="ts">
defineOptions({ name: 'vn-button' }); // 组件名称
import { addFn } from '@verney-design/utils'; // 导入工具函数

import { onMounted, computed } from 'vue';

import { buttonProps } from './types'; // 导入组件类型
const props = defineProps(buttonProps); // 定义组件属性

const buttonStyle = computed(() => {
    return props.type ? `vn-button__${props.type}` : '';
});

onMounted(() => {
    console.log('==button==mounted', addFn(1, 2)); // 打印工具函数
});
</script>
<style lang="less" scoped>
// 组件样式
.verney-ui-button__wrapper {
    color: #ccc;
    padding: 4px 6px;
    border-radius: 4px;
    &:hover {
        opacity: 0.8;
    }
    & + & {
        margin-left: 10px;
    }
}

.vn-button__primary {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;

    // &:hover {
    //     color: #fff;
    //     background: #66b1ff;
    //     border-color: #66b1ff;
    // }
}

.vn-button__success {
    color: #fff;
    background-color: #07c160;
    border-color: #07c160;

    // &:hover {
    //     color: #fff;
    //     background: #07c165;
    //     border-color: #07c165;
    // }
}
</style>
