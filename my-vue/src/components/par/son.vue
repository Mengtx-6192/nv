<template>
    <div class="son">
        son --- <!-- {{name}} -->
        <!-- <GS></GS> -->
        <GS v-bind="$attrs" v-on="$listeners"></GS>
        <button @click="son">son</button>
        <!-- {{name1}}------{{$attrs.name2}} -->
    </div>
</template>

<script>
import GS from './grandson'
    export default {
        components: { GS },
        // props: [ 'name1' ],
        // inject: [ 'name' ],
        // data() {
        //     return {
        //     }
        // },
        // mounted() {
            // console.log('son', this.name);
        // },
        methods: {
            son() {
                this.$emit('son', this.$attrs)
            }
        },
    }
</script>

<style scoped>
    .son { 
        width: 223px;
        height: 100px;
        background: yellow
    }
</style>