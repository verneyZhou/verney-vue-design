<template>
    <div class='verney-ui-button__wrapper'>button 组件</div>
</template>

<script lang='ts'>
export default {
    name: 'Button',
};
</script>
<script setup lang='ts'>
import {addFn} from '@verney-design/utils'

import { onMounted } from 'vue';

onMounted(() => {
    console.log('==button==mounted', addFn(1, 2));
});
</script>
<style lang='less' scoped>
.verney-ui-button__wrapper {
    color: #ccc;
}
</style>