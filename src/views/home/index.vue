<template>
  <el-container>
    <el-header> 组件 </el-header>
    <el-container>
      <nav-menu></nav-menu>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
    <!-- 左侧导航 -->
  </el-container>
</template>

<script>
import NavMenu from "../compontent/nav/navMenu.vue";

export default {
  name: "App",
  components: {
    NavMenu,
  },
};
</script>

<style lang="scss" scoped>
::v-deep .el-header {
  background: #cedff5;
  border-bottom: 1px solid #eee;
}

.el-header,
.el-footer {
  background: #fff;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  // background-color: #E9EEF3;
  background-color: #fff;
  color: #333;
  text-align: center;
}

body > .el-container {
  margin-bottom: 40px;
  height: 100%;
}

::v-deep .el-container {
  height: 100%;
}
</style>
