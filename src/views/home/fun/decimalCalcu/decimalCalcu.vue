<template>
  <div class="dicimal">
    <div class="dicimal_content">
      <span class="dicimal_span">
        <span>保留：</span>
        <el-input-number
          style="height: 31px; line-height: 31px; width: 130px"
          v-model="num"
          @change="handleChange"
          :min="1"
          :max="20"
          label="描述文字"
        ></el-input-number>
        位
      </span>
    </div>
    <div class="dicimal_content">
      <span>计算：</span>
      <amount-input
        :value="num1"
        :width="width"
        @change="num1Change"
        :decimalNum="num"
      ></amount-input>
      <el-select class="dicimal_select" v-model="selValue" @change="change">
        <el-option
          v-for="op in options"
          :value="op.value"
          :label="op.label"
          :key="op.id"
          >{{ op.label }}</el-option
        >
      </el-select>
      <amount-input
        :value="num2"
        :width="width"
        @change="num2Change"
        :decimalNum="num"
      ></amount-input>
      <span class="dicimal_total">{{ total }}</span>
    </div>
  </div>
</template>

<script>
import inputFun from "@/utils/fun.js";
import AmountInput from "../../common/text/compontent/amountInput.vue";
import { fnNumAdd, fnNumSub, fnNumMulti, fnNumDiv } from "./decimalCalcu.js";

export default {
  components: {
    AmountInput,
  },
  data() {
    return {
      width: 100,
      num: 2,
      num1: "",
      num2: "",
      total: "",
      selValue: 1,
      options: [
        { id: "add", label: "+", value: 1 },
        { id: "sub", label: "-", value: 2 },
        { id: "multi", label: "*", value: 3 },
        { id: "division", label: "/", value: 4 },
      ],
    };
  },
  methods: {
    handleChange(value) {
      this.num = value;
      this.totalMethods(this.selValue);
    },
    num1Change(e) {
      this.num1 = e;
      this.totalMethods(this.selValue);
    },
    num2Change(e) {
      this.num2 = e;
      this.totalMethods(this.selValue);
    },
    change(e) {
      this.selValue = e;
      this.totalMethods(this.selValue);
    },
    totalMethods(e) {
      console.log(e);
      const { num1, num2 } = this;
      let decimalData = {
        1: fnNumAdd(num1, num2),
        2: fnNumSub(num1.toString(), num2.toString()),
        3: fnNumMulti(num1.toString(), num2.toString()),
        4: fnNumDiv(num1.toString(), num2.toString()),
      };
      this.total = inputFun.getTofixed(decimalData[e], this.num);
    },
  },
};
</script>

<style lang="scss" scoped>
// @import "@/view/styles/input.scss";
::v-deep .el-input__inner {
  height: 32px;
}
::v-deep .el-input__icon {
  line-height: 32px;
}
.dicimal {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  &_span {
    margin-right: 16px;
    display: flex;
    flex-direction: row;

    span {
    }
  }

  &_content {
    display: flex;
    flex-direction: row;
    height: 32px;
    line-height: 32px;
    margin: 8px 0;
  }

  &_select {
    width: 80px;
    margin: 0 6px;
    height: 32px;
  }

  &_total {
    display: inline-block;
    line-height: 32px;
    margin-left: 8px;
  }
}
</style>
