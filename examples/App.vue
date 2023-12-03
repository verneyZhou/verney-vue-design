<template>
<div class=''>
    <h2>Verney Design Example</h2>
    <Button></Button>
    <Input></Input>
</div>
</template>

<script lang='ts'>
export default {
    name: 'App',
};
</script>
<script setup lang='ts'>
import {Button, Input} from '@verney-design/ui';
import { onMounted } from 'vue';
onMounted(() => {
    console.log('==app==mounted', Button);
});
</script>
<style lang='less' scoped>
</style>