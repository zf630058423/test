<template>
  <el-form ref="dataForm" :model="dataForm" label-width="170px">
    <col-layout title="项目信息" :cols="3" cell="1-2">
      <el-form-item slot="col_1" prop="code" label="单据编号：">
        <el-input v-model="dataForm.code" size="small" placeholder="请输入" />
      </el-form-item>
      <el-form-item slot="col_2" prop="projectNumber" label="项目编号：">
        <el-input
          v-model="dataForm.projectNumber"
          size="small"
          placeholder="请输入"
        />
      </el-form-item>
    </col-layout>
  </el-form>
</template>

<script>
import ColLayout from "./colLayout.vue";
export default {
  name: "Col3TtLayout",
  components: {
    ColLayout,
  },
  data() {
    return {
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

<style></style>
