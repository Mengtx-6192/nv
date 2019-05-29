<template>
    <div class="son">
        son组件 -----> <!-- {{name}} -->
        <!-- <GS></GS> -->
        <GS v-bind="$attrs" v-on="$listeners"></GS>  <!-- 2 -->
        <button @click="son">son</button>   <!-- 2 -->
        <!-- {{name1}}------{{$attrs.name2}} -->
    </div>
</template>

<script>
    import GS from './grandson'
    export default {
        components: { GS },
        // inject: [ 'name' ],  // 1
        // data() {
        //     return {
        //     }
        // },
        // mounted() { // 2
            // console.log('son', this.$attrs);
        // },
        methods: {
            son() { // 2
                this.$emit('son', this.$attrs)
            }
        },
    }
</script>

<style scoped>
    .son { 
        width: 70%;
        padding: 20px;
        background: yellow;
        padding: 10px
    }
</style>