<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
@import "@/styles/global.scss"; // 引入scss文件

html,
body {
  height: 100%;
  background: #ffffff;
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
  // height: calc(100% - 60px);
}

.el-aside {
  background-color: #fff !important;
}
</style>
