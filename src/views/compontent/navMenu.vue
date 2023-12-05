<template>
  <el-aside width="200px">
    <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          active-text-color="#ffd04b"
          router>
          <!-- 无子级 -->
          <el-menu-item index="/main">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-menu-item index="/asyncSlot">
            <i class="el-icon-menu"></i>
            <span slot="title">插槽作用域</span>
          </el-menu-item>
           <!-- 有子级 -->
           <el-submenu index="/transition">
            <template slot="title">动画</template>
            <el-menu-item index="/transition/transitionList">动画测试</el-menu-item>
            <el-menu-item index="/transition/transitionTest">轮播图动画</el-menu-item>
            <el-menu-item index="/transition/transitionList2">列表动画</el-menu-item>
          </el-submenu>
         
    </el-menu>
  </el-aside>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>

</style>
