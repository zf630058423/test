<template>
  <div>
    <!-- 无子级 -->
    <el-menu-item :index="basePath" v-if="!item.child" @click="menuClick(item)">
      <i class="el-icon-menu"></i>
      <span slot="title">{{ item.name }}</span>
    </el-menu-item>
    <!-- 有子级 -->
    <el-submenu :index="basePath" v-else @click="menuClick(item)">
      <template slot="title">
        <i class="el-icon-menu" v-if="item.child"></i>
        <span slot="title">{{ item.name }}</span>
      </template>
      <!-- 递归自调 -->
      <nav-item
        :basePath="sub.url"
        v-for="sub in item.child"
        :item="sub"
        :key="sub.url"
      ></nav-item>
    </el-submenu>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "NavItem",
  props: ["item", "basePath"],
  methods: {
    ...mapActions(["menuVuex"]),
    menuClick(item) {
      this.menuVuex(item);
    },
  },
};
</script>

<style lang="scss" scoped>
.el-submenu {
  text-align: left;
}
.el-menu-item {
  text-align: left;
}
</style>
