<template>
  <div class="row-layout">
    <form-title v-if="title" :title="title" :text="text"></form-title>
    <div class="form-layout-row" :style="marginStyle">
      <el-row :gutter="gutter">
        <el-col
          :span="spanCol(cIndex)"
          :offset="getOffset(col)"
          :key="cIndex"
          v-for="(col, cIndex) in cols"
        >
          <slot :name="`col_${col}`"></slot>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import FormTitle from "./formTitle.vue";

export default {
  name: "rowLayout",
  components: { FormTitle },
  props: {
    //是否存在标题
    title: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
    //总共有多少列
    cols: {
      type: Number,
      default: 3,
    },
    //偏移量 改变控件大小
    offset: {
      type: Number,
      default: 0,
    },
    cell: {
      type: String,
      default: "",
    },
    gutter: {
      type: Number,
      default: 20,
    },
    marginStyle: {
      type: String,
      default: "",
    },
  },
  computed: {
    //第一列不需要偏移量 第二列、第三列...自己设置偏移量
    getOffset({ offset }) {
      return (col) => {
        return col > 1 ? offset : 0;
      };
    },
    //通过偏移量 动态计算span分隔
    spanCol({ cols, offset, cell }) {
      return (index) => {
        let rCell = "";
        if (!cell) {
          for (let i = 0; i < cols; i++) {
            rCell += 1 + "-";
          }
          rCell = rCell.substring(0, rCell.length - 1);
        } else {
          rCell = cell;
        }

        if (rCell && !rCell.includes("-") && rCell.length === 1) {
          //如果只有一位即24
          return 24;
        } else {
          let cLength = rCell.includes("-") ? rCell.split("-").length : 0;
          if (cols === cLength) {
            //如果格子相同 就按相同的来分配
            return cols && cols < 8
              ? parseInt((24 - offset * (cols - 1)) / cols)
              : 1;
          } else {
            let cellArr = rCell.split("-");
            let total = cellArr.reduce((prev, cur) => {
              return parseInt(Number(prev) + Number(cur));
            }, 0);
            let offsetLeft = offset * (total - 1);
            let curCol = parseInt((24 - offsetLeft) / total);
            let curOffset = offsetLeft > 1 ? offsetLeft - 1 : offsetLeft;
            if (cellArr[index] && Number(cellArr[index]) > 1 && offset) {
              return curCol * Number(cellArr[index]);
            } else if (
              cellArr[index] &&
              Number(cellArr[index]) === 1 &&
              offset
            ) {
              return curCol * Number(cellArr[index]) + curOffset;
            }
            return cellArr[index] ? curCol * Number(cellArr[index]) : 0;
          }
        }
      };
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}

.form-layout-row {
  margin: 16px;
}
</style>
