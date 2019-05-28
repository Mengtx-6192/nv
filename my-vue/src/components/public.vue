<template>
    <div class="public">
        {{son}}
        <button @click="btn">点击</button>
    </div>
</template>

<script>
    export default {
        props: [ 'son' ],
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
        border-top: 1px solid green
    }
</style>