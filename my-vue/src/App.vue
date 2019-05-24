<template>
  <!-- html -->
  <div class="app">
      <Hello :msg="msg" @on-emit="receive"></Hello>
      <!-- 1234 -->
      <button @click="btn1">按钮1</button> 
      <!-- 5678 -->
      <button @click="btn2">按钮2</button>
  </div>
</template>

<script>
  // js
  import Hello from './components/HelloWorld'
  export default {
    components: {
        Hello
    },
    data() {
        return {
            msg: ''
        }
    },
    methods: {
        btn1() {
            this.msg = 1234
        },
        btn2() {
            this.msg = 5678
        },
        receive(v) {
            console.log('父组件的方法',v);
        }
    }
  }
</script>

<style>
/* css */
</style>