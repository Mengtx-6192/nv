<template>
    <div class="public">
        {{son}}
        <button @click="btn">点击</button>
    </div>
</template>

<script>
    export default {
        props: [ 'son' ], // 第一种写法
        // props: {
        //     son: {
        //         type: String,
        //         default: '默认的字符串'
        //     }
        // },     // 第二种写法， 比较严谨。 推荐
        data() {
            return {
                isFlag: true
            }
        },
        methods: {
            btn() {
                this.isFlag = !this.isFlag
                this.$emit('on-son1', this.isFlag)
            }
        }
    }
</script>

<style scoped>
    .public {
        border-top: 1px solid green;
        width: 50%;
        padding: 20px;
        background: greenyellow;
    }
</style>