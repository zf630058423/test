<template>
  <div class="row-layout content_overflow">
    <row-layout
      title="1、fromTitle组件：表单标题"
      :remark="remark"
      :source="formTitleCode"
    >
      <form-title></form-title>
    </row-layout>
    <row-layout
      title="2、colLayout组件：表单列分割"
      :remark="remark"
      :source="colLayoutCode"
    ></row-layout>
    <row-layout
      title="3、一行三列，包含标题"
      :remark="remark"
      :source="colLayoutCode"
    >
      <col3-layout></col3-layout>
    </row-layout>

    <row-layout
      title="4、一行三列，包含标题，第二、三列合并成一列"
      :remark="remark"
      :source="col3TtLayoutCode"
    >
      <col3-tt-layout></col3-tt-layout>
    </row-layout>

    <row-layout
      title="5、一行四列，不包含标题"
      :remark="remark"
      :source="col4LayoutCode"
    >
      <col4-layout></col4-layout>
    </row-layout>
  </div>
</template>

<script>
import RowLayout from "@/views/compontent/rowLayout/rowLayout.vue";
import FormTitle from "./formTitle.vue";
import Col3Layout from "./col3Layout.vue";
import Col3TtLayout from "./col3TtLayout.vue";
import Col4Layout from "./col4Layout.vue";
import formTitleCode from "!!raw-loader!./formTitle.vue";
import colLayoutCode from "!!raw-loader!./colLayout.vue";
import col3LayoutCode from "!!raw-loader!./col3Layout.vue";
import col3TtLayoutCode from "!!raw-loader!./col3TtLayout.vue";
import col4LayoutCode from "!!raw-loader!./col4Layout.vue";

export default {
  name: "rowLay",
  components: {
    RowLayout,
    FormTitle,
    Col3Layout,
    Col3TtLayout,
    Col4Layout,
  },
  data() {
    return {
      remark: "右下角查看代码 →",
      formTitleCode,
      col3LayoutCode,
      colLayoutCode,
      col3TtLayoutCode,
      col4LayoutCode,
      dataForm: {
        code: "",
        projectNumber: "",
        projectName: "",
        projectAddress: "",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/contentFlow.scss"; // 引入scss文件
</style>
