<template>
  <div class="common container_content">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "commonTest",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/global.scss"; // 引入scss文件
</style>
