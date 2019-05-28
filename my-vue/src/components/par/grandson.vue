<template>
    <div class="gs">
        grandson 
        {{name}}
        <!-- >>>>{{$attrs.name1}} -->
        <!-- <button @click="gs">gs</button> -->
    </div>
</template>

<script>
    export default {
        inject: [ 'name' ],
        // data() {
        //     return {
        //     }
        // },
        // mounted() {
        //     console.log('m', this.$attrs.name3='xxx');
        // },
        // methods: {
        //     gs() {
        //         this.$emit('gs', this.$attrs)
        //     }
        // },
    }
</script>

<style scoped>
    .gs { 
        width: 169px;
        height: 50px;
        background: #ccc;
        margin-top: 10px;
    }
</style>