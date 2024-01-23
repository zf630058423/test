<template>
  <div class="container">
    <left-header class="container_left"></left-header>
    <content-header class="container_content"></content-header>
    <right-header class="container_right"></right-header>
  </div>
</template>

<script>
import LeftHeader from "./leftHeader.vue";
import ContentHeader from "./contentHeader.vue";
import RightHeader from "./rightHeader.vue";

export default {
  name: "headCom",
  components: {
    LeftHeader,
    ContentHeader,
    RightHeader,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;

  &_left {
    width: 200px;
  }

  &_content {
    flex: 1;
  }

  &_right {
    width: 400px;
    text-align: right;
    padding-right: 16px;
  }
}
</style>
