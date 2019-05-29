<template>
  <div class="hello">
    <div>{{msg}}</div>
    <!-- <Public></Public> -->
    <pub-com :class="{'font': isflag}" :son="msg" @on-son1="parentMethod"></pub-com>
  </div>
</template>

<script>
  import Public from './public'
  export default {
    components: { 
      'pubCom': Public  
    },
    data() {
      return {
        isflag: true,
        msg: '1.props和$emit',
        // parent: '给我一个提示框'
      }
    },
    methods: {
      parentMethod(v) {
        this.isflag = v
      }
    }
  }
</script>

<style scoped>
  .hello {
    width: 100%;
    height: 200px;
    border: 1px solid red;
    padding: 20px;
    background: #d3f35430
  }
  .font {
    font-size: 20px
  }
</style>