<template>
    <div class="parent">
        Parent组件 ----->
         <!-- <Son></Son> -->  <!-- provide用 --> <!-- 1 -->
        <Son :name1="name1" :name2="name2" @son="parent1" @gs="p2"></Son> <!-- $attrs用 --> <!-- 2 -->
    </div>
</template>

<script>
    import Son from './par/son'
    export default {
        components: { Son },
        provide: {  // 1
            name: 'grandparent11',
        },
        data() {
            return { // 2
                name1: '这是parent1',
                name2: '这是parent2',
            }
        },
        methods: { // 2
            parent1(v) {
                console.log('p1', v);
            },
            p2(v) {
                console.log('p2', v);
            }
        },
    }
</script>

<style scoped>
    .parent {
        width: 100%;
        padding: 20px;
        border: 1px solid red;
        background: skyblue
    }
</style>