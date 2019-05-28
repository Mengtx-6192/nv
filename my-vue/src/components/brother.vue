<template>
    <div class="test">
        brother
        <!-- <div v-for="(item, i) in data" :key="i">{{item}}</div> -->
        <!-- <div v-show="false">show</div>
        <div v-if="false">if</div>
        <div v-else>else</div> -->
        <!-- {{modal1}}
        <input type="text" v-model="modal1"> -->
        <A></A>
        <B></B>
    </div>
</template>

<script>
import A from './bro/a'
import B from './bro/b'
    export default {
        components: {
            A,
            B
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
    width: 300px;
    height: 200px;
    border: 1px solid red
  }
</style>