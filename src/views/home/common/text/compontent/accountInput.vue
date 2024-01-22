<template>
  <div class="container">
    <el-checkbox class="border-style" v-model="check">边框</el-checkbox>
    <el-checkbox class="border-style" v-model="checkIcon">图标</el-checkbox>
    <el-checkbox class="border-style" v-model="checkPwd">密码</el-checkbox>
    <div :class="{ radius: check }" class="account" :style="accountStyle">
      <i
        class="el-icon-user account_icon"
        type="el-icon-user"
        v-if="checkIcon"
      ></i>
      <span class="account_text" v-else>{{ text }}：</span>
      <el-input
        class="account_input"
        :type="getType"
        v-model="value"
        :style="style"
        :placeholder="placeholder"
      ></el-input>
    </div>
  </div>
</template>

<script>
export default {
  name: "accountInput",
  props: {
    text: {
      type: String,
      default: "账号",
    },
    type: {
      type: String,
      default: "text",
    },
    width: {
      type: Number,
      default: 280,
    },
    height: {
      type: Number,
      default: 40,
    },
    placeholder: {
      type: String,
      default: "请输入",
    },
    radius: {
      type: Number,
      default: 24,
    },
  },
  computed: {
    getType() {
      return this.checkPwd ? "password" : "text";
    },
    accountStyle() {
      return {
        width: `${this.width}px`,
        height: `${this.height}px`,
      };
    },
    style() {
      return {
        width: `${this.width - 90}px`,
        height: `${this.height - 6}px`,
      };
    },
  },
  data() {
    return {
      value: "",
      check: false,
      checkIcon: false,
      checkPwd: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.border-style {
  margin: 8px;
}

.account {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid #d8d8d8;
  width: 280px;
  font-size: 14px;

  &_icon {
    font-size: 20px;
    margin-left: 24px;
    margin-right: 8px;
  }

  &_text {
    width: 60px;
    margin-left: 18px;
    display: inline-block;
  }

  &_input {
    margin-bottom: 6px;
  }
}

.radius {
  border: 1px solid #d8d8d8;
  border-radius: 24px;
}

::v-deep .el-input__inner {
  border: 0;
}
</style>