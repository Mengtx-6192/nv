<template>
    <div class="gs">
        grandson组件 ----->
        {{name}}  <!-- 1 -->
        <!-- {{$attrs.name1}} -->  <!-- 2 -->
        <!-- <button @click="gs">gs</button> -->  <!-- 2 -->
    </div>
</template>

<script>
    export default {
        inject: [ 'name' ],  // 1
        // data() {
        //     return {
        //     }
        // },
        // mounted() {  // 1
        //     console.log('m', this.$attrs.name3='xxx');
        // },
        // methods: {
        //     gs() { // 2
        //         this.$emit('gs', this.$attrs)
        //     }
        // },
    }
</script>

<style scoped>
    .gs { 
        width: 50%;
        height: 50px;
        background: #ccc;
        padding: 20px
    }
</style>