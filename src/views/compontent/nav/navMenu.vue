<template>
  <el-aside width="200px">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      active-text-color="#ffd04b"
      router
    >
      <!-- 无子级 -->
      <!-- <el-menu-item index="/main">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-menu-item index="/asyncSlot">
            <i class="el-icon-menu"></i>
            <span slot="title">插槽作用域</span>
          </el-menu-item> -->
      <!-- 有子级 -->
      <!-- <el-submenu index="/transition">
            <template slot="title">
              <i class="el-icon-menu"></i>
            <span slot="title">动画</span>
            </template>
            <el-menu-item index="/transition/transitionList">动画测试</el-menu-item>
            <el-menu-item index="/transition/transitionTest">轮播图动画</el-menu-item>
            <el-menu-item index="/transition/transitionList2">列表动画</el-menu-item>
          </el-submenu> -->

      <!-- <el-menu-item :index="item.url" v-for="item in items" :key="item.url">
            <i class="el-icon-menu"></i>
            <span slot="title">{{ item.name }}</span>
          </el-menu-item> -->

      <nav-item
        :basePath="item.url"
        v-for="item in items"
        :item="item"
        :key="item.url"
      ></nav-item>
    </el-menu>
  </el-aside>
</template>

<script>
import NavItem from "./navItem.vue";

export default {
  name: "App",
  components: {
    NavItem,
  },
  data() {
    return {
      items: [
        { name: "首页", url: "/home" },
        {
          name: "开发指南",
          url: "/guide",
          child: [
            { name: "项目说明", url: "/guide/description" },
            { name: "工具库合集", url: "/guide/toolLibrary" },
          ],
        },
        {
          name: "常用组件",
          url: "/common",
          child: [{ name: "输入框", url: "/common/textInput" }],
        },
        { name: "高级组件", url: "/advanced" },
        {
          name: "现代Css",
          url: "/modern",
          child: [
            { name: "border", url: "/modern/border" },
            { name: "boxShadow", url: "/modern/boxShadow" },
            { name: "gradient", url: "/modern/gradient" },
          ],
        },
        { name: "类库", url: "/lib" },
        {
          name: "函数",
          url: "/fun",
          child: [
            { name: "小数计算", url: "/fun/decimalCalcu" },
            { name: "普通函数", url: "/fun/ordinary" },
            { name: "其他", url: "/fun/other" },
          ],
        },
        { name: "插槽作用域", url: "/asyncSlot" },
        {
          name: "动画transition",
          url: "/transition",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.el-menu {
  height: 100%;
}
</style>
