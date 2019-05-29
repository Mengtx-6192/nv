<template>
    <div class="test">
        brother ----->
        <!-- vue常用指令 -->
        <!-- <div v-for="(item, i) in data" :key="i">{{item}}</div> -->
        <!-- <div v-show="false">show</div>
        <div v-if="false">if</div>
        <div v-else>else</div> -->
        <!-- {{modal1}}
        <input type="text" v-model="modal1"> -->
        <Acomponent></Acomponent>
        <b-component></b-component>
    </div>
</template>

<script>
/**
 * 
 *  组件命名规范 : 1. 大驼峰命名(每个单词的首字母大写)；
 *                2. 短横线命名，
 *                    注意：b组件在注册时用的小驼峰命名,在使用时用的短横线
 */
import Acomponent from './bro/a'
import B from './bro/b'
    export default {
        components: {
            Acomponent,
            'bComponent': B
        },
        data() {
            return {
                // data: [1,2,3,4],
                // modal1: '初始值'
            }
        },
    }
</script>

<style  scoped>

  .test {
    width: 100%;
    height: 200px;
    border: 1px solid red;
    background: yellowgreen;
    padding: 20px
  }
</style>