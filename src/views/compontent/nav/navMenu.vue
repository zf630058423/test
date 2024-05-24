<template>
  <el-aside width="200px">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      active-text-color="#ffd04b"
      router
    >
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
import { menuList } from "../navMenuList";

export default {
  name: "App",
  components: {
    NavItem,
  },
  data() {
    return {
      items: menuList,
    };
  },
};
</script>

<style lang="scss" scoped>
.el-menu {
  height: 100%;
}
</style>
