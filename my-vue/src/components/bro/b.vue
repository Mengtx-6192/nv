<template>
    <div class="b">
        b
        <button @click="receive">接收</button>
        -->>>{{msgB}}
    </div>
</template>

<script>
    export default {
        data() {
            return {
                msgB: ''
            }
        },
        mounted() {
            window.myevent.$on('data-a', v => this.msgB = v)
        },
        methods: {
            receive() {
                console.log(this.msgB);
            }
        }
    }
</script>

<style scoped>

</style>