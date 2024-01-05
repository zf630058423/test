<template>
  <div class="text-input">
    <row-layout
      title="金额输入框"
      remark="默认保留两位小数"
      :source="amountInputCode"
    >
      <amount-input placeholder="请输入金额"></amount-input>
    </row-layout>
    <row-layout
      title="百分比输入框"
      remark="默认保留两位小数"
      :source="percenInputCode"
    >
      <percen-input placeholder="请输入数字"></percen-input>
    </row-layout>
    <row-layout
      title="link输入框"
      remark="默认保留两位小数"
      :source="linkInputCode"
    >
      <link-input placeholder="请输入文字" value=""></link-input>
    </row-layout>
  </div>
</template>

<script>
import RowLayout from "../../compontent/rowLayout/rowLayout.vue";
import AmountInput from "./compontent/amountInput.vue";
import PercenInput from "./compontent/percenInput.vue";
import LinkInput from "./compontent/linkInput.vue";
//导出为模版字符串
import amountInputCode from "!!raw-loader!./compontent/amountInput.vue";
import percenInputCode from "!!raw-loader!./compontent/percenInput.vue";
import linkInputCode from "!!raw-loader!./compontent/linkInput.vue";

export default {
  name: "textInput",
  components: {
    RowLayout,
    AmountInput,
    PercenInput,
    LinkInput,
  },
  data() {
    return {
      amountInputCode, //金额组件代码
      percenInputCode,
      linkInputCode,
    };
  },
};
</script>
<style lang="scss" scoped>
.row_line {
  margin: 8px 16px;
}
.row {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-bottom: 1px solid #dcdfe6;
  padding: 8px 0;

  &_title {
    font-weight: bold;
  }

  &_remark {
    font-size: 14px;
  }
}
</style>
