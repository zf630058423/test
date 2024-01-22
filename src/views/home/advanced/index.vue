<template>
  <div class="advanced-com container_content">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "advAnced",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/global.scss"; // 引入scss文件
@import "@/styles/contentFlow.scss"; // 引入scss文件
</style>
