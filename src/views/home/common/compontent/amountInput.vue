<template>
  <el-input
    v-model="currentValue"
    :placeholder="placeholder"
    size="small"
    :disabled="disabled"
    @focus="focusHandler"
    @blur="blurHandler"
    :style="{ width: width + 'px', height: height + 'px' }"
  >
  </el-input>
</template>
<script>
/**
 * 金额组件
 */
import inputFun from "@/utils/fun.js";
export default {
  name: "AmountInput",
  model: {
    prop: "value",
    event: "change",
  },
  props: {
    decimalNum: {
      type: [Number, String],
      default: 2,
    },
    width: {
      type: Number,
      default: 200,
    },
    height: {
      type: Number,
      default: 32,
    },
    placeholder: {
      type: String,
      default: "请输入金额",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {
      type: [String, Number],
      default: "",
    },
  },
  data() {
    return {
      currentValue: "",
    };
  },
  watch: {
    value: {
      handler(value) {
        if (!value) {
          this.currentValue = "";
          return;
        }
        let val = value;
        if (val && typeof val === "number") {
          val = val.toString();
        }
        const newNal = inputFun.getTofixed(val, this.decimalNum);
        this.currentValue = newNal.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      },
      immediate: true,
    },
  },
  created() {},
  methods: {
    focusHandler(e) {
      const val = e.target.value;
      this.currentValue = val.replaceAll(",", "");
    },
    blurHandler(e) {
      const val = e.target.value.replaceAll(",", "");
      if (isNaN(val) || !val) {
        this.$emit("change", "");
        this.currentValue = "";
      } else {
        const newNal = inputFun.getTofixed(val, this.decimalNum);
        this.$emit("change", newNal);
        this.currentValue = newNal.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
    },
  },
};
</script>