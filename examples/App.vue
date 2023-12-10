<template>
<div class=''>
    <h2>Verney Design Example</h2>
    <!-- <VnButton></VnButton>
    <VnInput></VnInput> -->
    <vn-button></vn-button>
    <vn-input></vn-input>
</div>
</template>

    <script lang='ts'>
    export default {
        name: 'App',
    };
    </script>
    <script setup lang='ts'>
    // import {VnButton, VnInput} from '@verney-design/ui';
    import { onMounted } from 'vue';
    onMounted(() => {
        // console.log('==app==mounted', VnButton);
    });
    </script>
<style lang='less' scoped>
</style>