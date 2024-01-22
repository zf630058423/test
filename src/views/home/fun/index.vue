<template>
  <div class="container_content">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "funCom",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/contentFlow.scss"; // 引入scss文件
</style>
