<template>
  <div class="row-layout">
       <div class="row-layout_title row_line">{{ title }}</div>
       <div class="row-layout_remark row_line">备注： {{ remark }}</div>
       <div class="row-layout_compontent row_line">
         <slot></slot>
       </div>
    </div>
</template>

<script>
export default {
  name: 'rowLayout',
  props: {
    title: {
      type: String,
      default:'标题'
    },
    remark: {
      type: String,
      default:'备注'
    }
  },
  data() {
    return {
      
    }
  }
}
</script>

<style lang="scss" scoped>
.row_line{
  margin: 8px 16px;
}
.row-layout{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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