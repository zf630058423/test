<template>
  <div class="dicimal">
    <span>
      保留
      <el-input-number
        style="height: 32px; line-height: 32px"
        v-model="num"
        @change="handleChange"
        :min="1"
        :max="20"
        label="描述文字"
      ></el-input-number>
      位
    </span>
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
</template>

<script>
import AmountInput from "../../common/compontent/amountInput.vue";
import { fnNumAdd, fnNumSub, fnNumMulti, fnNumDiv } from "../decimalCalcu.js";

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
      switch (e) {
        case 1:
          this.total = fnNumAdd(num1.toString(), num2.toString());
          break;
        case 2:
          this.total = fnNumSub(num1.toString(), num2.toString());
          break;
        case 3:
          this.total = fnNumMulti(num1, num2);
          break;
        case 4:
          this.total = fnNumDiv(num1, num2);
          break;
      }
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
  flex-direction: row;
  justify-content: flex-start;

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