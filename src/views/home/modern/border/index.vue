<template>
  <div class="border-com content_overflow">
    <row-layout
      title="1、border-radius圆角"
      :remark="remark"
      :source="bordeRadiusCode"
    >
      <border-radius></border-radius>
    </row-layout>
    <row-layout
      title="2、border-radius:异形头像"
      :remark="remark"
      :source="borderBox1Code"
    >
      <border-box1></border-box1>
    </row-layout>
    <row-layout
      title="3、border-radius:异形相框"
      :remark="remark"
      :source="borderBox2Code"
    >
      <border-box2></border-box2>
    </row-layout>
    <row-layout
      title="4、border-radius:标题角标"
      :remark="remark"
      :source="borderBox3Code"
    >
      <border-box3></border-box3>
    </row-layout>
    <row-layout
      title="5、border-radius:多边形"
      :remark="remark"
      :source="borderBox4Code"
    >
      <border-box4></border-box4>
    </row-layout>
  </div>
</template>

<script>
import RowLayout from "@/views/compontent/rowLayout/rowLayout.vue";
import BorderRadius from "./borderRadius.vue";
import BorderBox1 from "./borderBox1.vue";
import BorderBox2 from "./borderBox2.vue";
import BorderBox3 from "./borderBox3.vue";
import BorderBox4 from "./borderBox4.vue";
import bordeRadiusCode from "!!raw-loader!./borderRadius.vue";
import borderBox1Code from "!!raw-loader!./borderBox1.vue";
import borderBox2Code from "!!raw-loader!./borderBox2.vue";
import borderBox3Code from "!!raw-loader!./borderBox3.vue";
import borderBox4Code from "!!raw-loader!./borderBox4.vue";

export default {
  name: "borderCom",
  components: {
    RowLayout,
    BorderRadius,
    BorderBox1,
    BorderBox2,
    BorderBox3,
    BorderBox4,
  },
  data() {
    return {
      remark: "右下角查看代码 →",
      bordeRadiusCode,
      borderBox1Code,
      borderBox2Code,
      borderBox3Code,
      borderBox4Code,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/contentFlow.scss"; // 引入scss文件
</style>
