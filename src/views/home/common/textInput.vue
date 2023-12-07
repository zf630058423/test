<template>
  <div class="text-input">
    <row-layout title="金额输入框" remark="默认保留两位小数">
      <amount-input placeholder="请输入金额"></amount-input>
    </row-layout>
    <row-layout title="百分比输入框" remark="默认保留两位小数">
      <percen-input placeholder="请输入数字"></percen-input>
    </row-layout>
    <row-layout title="link输入框" remark="默认保留两位小数">
      <link-input placeholder="请输入文字" value=""></link-input>
    </row-layout>
  </div>
</template>

<script>
import RowLayout from "../../compontent/rowLayout/rowLayout.vue";
import AmountInput from './compontent/amountInput.vue';
import PercenInput from "./compontent/percenInput.vue";
import LinkInput from './compontent/linkInput.vue';

export default {
  name:'textInput',
  components: {
    RowLayout,
    AmountInput,
    PercenInput,
    LinkInput
  },
  data(){ 
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.row_line{
  margin: 8px 16px;
}
.row{
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  border-bottom: 1px solid #DCDFE6;
  padding: 8px 0;

  &_title{
    font-weight: bold;
  }

  &_remark{
    font-size: 14px;
  }
}
</style>