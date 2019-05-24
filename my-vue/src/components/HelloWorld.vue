<template>
  <div class="hello">
      <!-- <div v-for="(item, i) in arr" :key="i">{{item.b}}</div> -->
      <!-- <div v-if="show">{{msg}}</div>
      <div v-show="show">{{msg}}</div> -->
      <input type="text" v-model="input">
      <button @click="send" v-text="msg"></button>
  </div>
</template>

<script>
  export default {
    props: ['msg'],
    data() {
      return {
        arr: [
          {a:1, b:2},
          {a:11, b:22},
          {a:111, b:222}
        ],
        show: false,
        input: '初始的值1'
      }
    },
    methods: {
      send() {
        this.$emit('on-emit', this.input)
      }
    },
  }
</script>
