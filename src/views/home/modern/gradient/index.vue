<template>
  <div class="content_overflow">
    <row-layout
      title="1、线性渐变 文字随背景渐变"
      :remark="remark"
      :source="linearGradientCode"
    >
      <linear-gradient></linear-gradient>
    </row-layout>

    <row-layout
      title="2、径向渐变"
      :remark="remark"
      :source="radialGradientCode"
    >
      <radial-gradient></radial-gradient>
    </row-layout>

    <row-layout
      title="3、锥形渐变 conic-gradient"
      :remark="remark"
      :source="conicGradientCode"
    >
      <conic-gradient></conic-gradient>
    </row-layout>
  </div>
</template>

<script>
import RowLayout from "@/views/compontent/rowLayout/rowLayout.vue";
import LinearGradient from "./linearGradient.vue";
import RadialGradient from "./radialGradient.vue";
import ConicGradient from "./conicGradient.vue";
import linearGradientCode from "!!raw-loader!./linearGradient.vue";
import radialGradientCode from "!!raw-loader!./radialGradient.vue";
import conicGradientCode from "!!raw-loader!./conicGradient.vue";
export default {
  name: "gradentCom",
  components: {
    RowLayout,
    LinearGradient,
    RadialGradient,
    ConicGradient,
  },
  data() {
    return {
      remark: "右下角查看代码 →",
      linearGradientCode,
      radialGradientCode,
      conicGradientCode,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/contentFlow.scss"; // 引入scss文件
</style>
