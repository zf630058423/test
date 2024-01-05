<template>
  <div id="app">
    <!-- 作用域插槽 -->
    <!-- <async-slot></async-slot> -->
    <!-- Transition动画 -->
    <!-- <transition-test></transition-test> -->
    <!-- 过渡组动画 -->
    <!-- <transition-list></transition-list>
    <transition-list2></transition-list2> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import AsyncSlot from './views/home/AsyncSlot.vue';
// import TransitionTest from './views/home/TransitionTest.vue'
// import TransitionList from './views/home/TransitionList.vue'
// import TransitionList2 from './views/home/TransitionList2.vue'

export default {
  name: "App",
  components: {
    // AsyncSlot,
    // TransitionTest,
    // TransitionList,
    // TransitionList2
  },
};
</script>

<style>
html,
body {
  height: 100%;
  background: #ffffff;
}

* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; */
  height: 100%;
  overflow: hidden;
}

.el-container {
  height: 100%;
}

.el-aside {
  background-color: #fff !important;
}

ul,
li {
  list-style: none;
}
</style>
