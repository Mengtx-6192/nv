<template>
    <div class="a">
        a
        <button @click="send">发送</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                msgA: '我是a组件的'
            }
        },
        methods: {
            send() {
                window.myevent.$emit('data-a', this.msgA)
            }
        }
    }
</script>

<style scoped>
    .a {
        width: 50%;
        padding: 20px;
        background: orange;
    }
</style>