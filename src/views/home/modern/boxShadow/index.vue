<template>
  <div class="container">
    <row-layout
      title="border-shadow阴影：小水滴"
      :remark="remark"
      :source="boxShadowCode"
    >
      <box-shadow></box-shadow>
    </row-layout>
  </div>
</template>

<script>
import RowLayout from "@/views/compontent/rowLayout/rowLayout.vue";
import BoxShadow from "./boxShadow.vue";
import boxShadowCode from "!!raw-loader!./boxShadow.vue";
export default {
  name: "boxShadowCom",
  components: {
    RowLayout,
    BoxShadow,
  },
  data() {
    return {
      remark: "右下角查看代码 →",
      boxShadowCode,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>