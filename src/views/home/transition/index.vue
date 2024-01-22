<template>
  <div class="transition content_overflow">
    <row-layout
      title="1、transition随机添加删除"
      :remark="remark"
      :source="transitionListCode"
    >
      <transition-list></transition-list>
    </row-layout>
    <row-layout
      title="2、transition列表随机添加删除"
      :remark="`输入后回车添加到列表，${remark}`"
      :source="transitionListCode2"
    >
      <transition-list2></transition-list2>
    </row-layout>
    <row-layout
      title="3、transition轮播图动画"
      :remark="remark"
      :source="transitionTestCode"
    >
      <transition-test></transition-test>
    </row-layout>
  </div>
</template>

<script>
import RowLayout from "@/views/compontent/rowLayout/rowLayout.vue";
import TransitionList from "./TransitionList.vue";
import TransitionList2 from "./TransitionList2.vue";
import TransitionTest from "./TransitionTest.vue";
import transitionListCode from "!!raw-loader!./TransitionList.vue";
import transitionListCode2 from "!!raw-loader!./TransitionList2.vue";
import transitionTestCode from "!!raw-loader!./TransitionTest.vue";

export default {
  name: "transition",
  components: {
    RowLayout,
    TransitionList,
    TransitionList2,
    TransitionTest,
  },
  data() {
    return {
      remark: "右下角查看代码 →",
      transitionListCode,
      transitionListCode2,
      transitionTestCode,
    };
  },
};
</script>

<style></style>
