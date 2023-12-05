<template>
  <div>
    <!-- 无子级 -->
          <el-menu-item :index="basePath" v-if="!item.child">
            <i class="el-icon-menu"></i>
            <span slot="title">{{ item.name }}</span>
          </el-menu-item>
           <!-- 有子级 -->
           <el-submenu :index="basePath" v-else>
            <template slot="title">
              <i class="el-icon-menu" v-if="item.child"></i>
              <span slot="title">{{ item.name }}</span>
            </template>
            <!-- 递归自调 -->
            <nav-item :basePath="sub.url" v-for="sub in item.child" :item="sub" :key="sub.url"></nav-item>
            <!-- <el-menu-item index="/transition/transitionList">动画测试</el-menu-item>
            <el-menu-item index="/transition/transitionTest">轮播图动画</el-menu-item>
            <el-menu-item index="/transition/transitionList2">列表动画</el-menu-item> -->
          </el-submenu>
  </div>
</template>

<script>
export default {
  name:'NavItem',
  props:['item','basePath']
}
</script>

<style lang="scss" scoped>
.el-submenu{
  text-align: left;
}
.el-menu-item{
  text-align: left;
}
</style>