<template>
    <div class="parent">
        Parent
         <!-- <Son></Son> -->  <!-- provide用 -->
        <!-- <div>接收子孙传来的值</div> -->
        <Son :name1="name1" :name2="name2" @son="parent1" @gs="p2"></Son> <!-- $attrs用 -->
    </div>
</template>

<script>
    import Son from './par/son'
    export default {
        components: { Son },
        provide: {
            name: 'grandparent11',
        },
        data() {
            return {
                name1: '这是parent1',
                name2: '这是parent2',
            }
        },
        methods: {
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
        width: 300px;
        height: 200px;
        border: 1px solid red;
        background: skyblue
    }
</style>