<template>
  <div class="ordinary-compontent">
    <h2>JavaScript 常考手写题</h2>
    <row-layout
      title="1、产生一个不重复的随机数组"
      :remark="remark"
      :source="noRepeatRandomCode"
    >
    </row-layout>
    <row-layout
      title="2、递归完成1到100的累加"
      :remark="remark"
      :source="noRepeatRandomCode"
    >
    </row-layout>
    <row-layout
      title="3、await async 如何实现"
      :remark="remark"
      :source="awaitAsyncCode"
    >
    </row-layout>
    <row-layout
      title="4、打印出 1~10000 以内的对称数"
      :remark="remark"
      :source="symmetryCode"
    >
    </row-layout>
    <row-layout
      title="5、实现一个字符串匹配算法indexOf"
      :remark="remark"
      :source="strmateCode"
    >
    </row-layout>
    <row-layout
      title="6、随机生成字符串"
      :remark="remark"
      :source="strRandomCode"
    >
    </row-layout>
    <row-layout
      title="7、数组中的最大值"
      :remark="remark"
      :source="arrayMaxValCode"
    >
    </row-layout>
    <row-layout
      title="8、数字符串中字母的出现次数"
      :remark="remark"
      :source="strLetterCountCode"
    >
    </row-layout>
    <row-layout
      title="9、判断两个对象是否相等"
      :remark="remark"
      :source="objectTwoEqualCode"
    >
    </row-layout>
    <row-layout
      title="10、对象的合并"
      :remark="remark"
      :source="objectMergeCode"
    >
    </row-layout>
  </div>
</template>

<script>
import RowLayout from "../../../compontent/rowLayout/rowLayout.vue";
import noRepeatRandomCode from "!!raw-loader!./funjs/no-repeat-random";
import awaitAsyncCode from "!!raw-loader!./funjs/async-await";
import symmetryCode from "!!raw-loader!./funjs/symmetry";
import strmateCode from "!!raw-loader!./funjs/strmate";
import strRandomCode from "!!raw-loader!./funjs/str-random";
import arrayMaxValCode from "!!raw-loader!./funjs/arry-max-value";
import strLetterCountCode from "!!raw-loader!./funjs/str-letter-count";
import objectTwoEqualCode from "!!raw-loader!./funjs/object-two-equal";
import objectMergeCode from "!!raw-loader!./funjs/object-merge";

export default {
  name: "ordinaryFun",
  components: {
    RowLayout,
  },
  data() {
    return {
      remark: "右下角查看代码 →",
      noRepeatRandomCode,
      awaitAsyncCode,
      symmetryCode,
      strmateCode,
      strRandomCode,
      arrayMaxValCode,
      strLetterCountCode,
      objectTwoEqualCode,
      objectMergeCode,
    };
  },
  methods: {},
};
</script>

<style>
</style>