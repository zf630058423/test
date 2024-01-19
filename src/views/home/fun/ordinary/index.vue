<template>
  <div class="ordinary-compontent">
    <h2 class="ordinary-head">JavaScript 常考手写题</h2>
    <div class="compontent-content">
      <el-input
        class="title-input"
        v-model="titleValue"
        placeholder="请输入标题关键字搜索"
      ></el-input>
      <div class="layout-content">
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
        <row-layout
          title="11、树形结构转成列表"
          :remark="remark"
          :source="treeToListCode"
        >
        </row-layout>
        <row-layout
          title="12、列表结构转树形"
          :remark="remark"
          :source="listToTreeCode"
        >
        </row-layout>
        <row-layout
          title="13、实现深拷贝"
          :remark="remark"
          :source="deepCloneCode"
        >
        </row-layout>
        <row-layout
          title="14、手写instanceof"
          :remark="remark"
          :source="instanceofCode"
        ></row-layout>
        <row-layout
          title="15、手写call apply bind"
          :remark="remark"
          :source="callApplyBindCode"
        ></row-layout>
      </div>
    </div>
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
import treeToListCode from "!!raw-loader!./funjs/tree-to-list";
import listToTreeCode from "!!raw-loader!./funjs/list-to-tree";
import deepCloneCode from "!!raw-loader!./funjs/deep-clone";
import instanceofCode from "!!raw-loader!./funjs/instanceof";
import callApplyBindCode from "!!raw-loader!./funjs/call-apply-bind";

export default {
  name: "ordinaryFun",
  components: {
    RowLayout,
  },
  data() {
    return {
      titleValue: "",
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
      treeToListCode,
      listToTreeCode,
      deepCloneCode,
      instanceofCode,
      callApplyBindCode,
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.ordinary-compontent {
  overflow: hidden;
  position: relative;

  .ordinary-head {
    height: 60px;
    line-height: 60px;
  }
  .compontent-content {
    margin: 24px 0;
    text-align: left;
    position: relative;

    .title-input {
      width: 400px;
    }

    .layout-content {
      overflow: auto;
      height: calc(100% - 90px);
    }
  }
}
</style>
