<template>
    <div>
        <vn-button type="primary"></vn-button>
        <vn-button type="success"></vn-button>
    </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
onMounted(() => {
    console.log('====mounted');
});
</script>
<style lang="less" scoped></style>
