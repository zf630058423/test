<template>
  <div class="container">
    <left-header></left-header>
    <content-header></content-header>
    <right-header></right-header>
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

<style lang="scss" scoped></style>
