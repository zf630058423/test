<template>
  <div class="fun-compontent">
    <row-layout
      title="两位小数加减乘除"
      remark="默认保留两位小数"
      :source="decimalCalcuCode"
    >
      <decimal-calcu></decimal-calcu>
    </row-layout>
  </div>
</template>

<script>
import RowLayout from "../../../compontent/rowLayout/rowLayout.vue";
import DecimalCalcu from "./decimalCalcu.vue";
import decimalCalcuCode from "!!raw-loader!./decimalCalcu.js";

export default {
  name: "funCompontent",
  components: {
    RowLayout,
    DecimalCalcu,
  },
  data() {
    return {
      decimalCalcuCode,
    };
  },
  methods: {},
};
</script>

<style>
</style>