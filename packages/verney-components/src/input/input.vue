<template>
<input class="verney-ui-input__wrapper" placeholder="input 组件"/>
</template>
    <!-- <script lang='ts'>
    export default {
    name: 'vn-  ',
    };
    </script> -->
<script setup lang='ts'>
    defineOptions({ name: "vn-input" }); // 组件名称
    
</script>
<style lang='less' scoped>
.verney-ui-input__wrapper {
    color: #ccc;
}
</style>