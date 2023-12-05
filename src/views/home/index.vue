<template>
  <!-- <div class="main"> -->
    <el-container>
      
        <!-- 左侧导航 -->
        <nav-menu></nav-menu>
        <!-- 右侧主体 -->
      <el-container>
        <el-header>
          头部
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
      
    </el-container>
  <!-- </div> -->
</template>

<script>
import NavMenu from '../compontent/navMenu.vue'

export default {
  name: 'App',
  components: {
    NavMenu
  }
}
</script>

<style lang="scss" scoped>

.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }
  
  body > .el-container {
    margin-bottom: 40px;
    height: 100%;
  }

  ::v-deep .el-container{
    height: 100%;
  }

</style>
