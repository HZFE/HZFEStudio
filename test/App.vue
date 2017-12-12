<template>
    <div>
        <h1>Template</h1>
        <C></C>
    </div>
</template>

<script>
    import C from './Component.vue';
    export default {
        components: {
            C
        }
    }
</script>

<style lang="scss">
    body {
        background: #eee;
        div {
            border: 1px solid #aaa;
        }
    }
</style>