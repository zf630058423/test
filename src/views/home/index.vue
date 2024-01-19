<template>
  <el-container>
    <el-header>
      <head-com></head-com>
    </el-header>
    <el-container class="container-content">
      <nav-menu></nav-menu>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
    <!-- 左侧导航 -->
  </el-container>
</template>

<script>
import HeadCom from "../compontent/header/headCom.vue";
import NavMenu from "../compontent/nav/navMenu.vue";

export default {
  name: "App",
  components: {
    NavMenu,
    HeadCom,
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
  overflow: hidden;
}

.container-content {
  margin-bottom: 40px;
  height: calc(100% - 60px);
}
</style>
