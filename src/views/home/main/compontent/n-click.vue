<template>
  <el-switch
    v-model="value"
    active-color="#13ce66"
    inactive-color="#ff4949"
    @input="inputChange"
  >
  </el-switch>
</template>

<script>  
export default {
  name: "nClick",
  data() {
    return {
      value: false,
    };
  },
  methods: {
    inputChange(e) {
      const val = e ? "打开" : "关闭";
      console.log(val);
    },
  },
};
</script>

<style scoped>
</style>