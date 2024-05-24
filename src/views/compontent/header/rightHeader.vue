<template>
  <div>
    <el-autocomplete
      class="inline-input"
      v-model="inputValue"
      :fetch-suggestions="querySearch"
      placeholder="请输入菜单搜索"
      @select="handleSelect"
    ></el-autocomplete>
    <el-select
      class="vue-version"
      v-model="vueValue"
      placeholder="版本"
      @change="change"
    >
      <el-option
        :label="item.label"
        :value="item.value"
        v-for="item in vueVersions"
        :key="item.id"
      ></el-option>
    </el-select>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { menuList } from "../navMenuList";

export default {
  name: "rightHeader",
  data() {
    return {
      restaurants: [],
      inputValue: "",
      vueValue: "2",
      vueVersions: [
        { id: 2, label: "vue2.0", value: "2" },
        { id: 3, label: "vue3.0", value: "3" },
      ],
      menus: [],
    };
  },
  mounted() {
    this.restaurants = this.loadAll();
  },
  methods: {
    ...mapActions(["menuVuex"]),
    getMenuChildren(arr) {
      if (arr.length > 0) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i].level === 2) {
            this.menus.push(arr[i]);
          } else {
            if (arr[i].child) {
              this.getMenuChildren(arr[i].child);
            }
          }
        }
      }
    },
    loadAll() {
      this.getMenuChildren(menuList);
      return this.menus
        ? this.menus.map((el) => ({
            ...el,
            value: el.name,
            address: el.name,
          }))
        : [];
    },
    querySearch(queryString, cb) {
      const restaurants = this.restaurants;
      const results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return (restaurant) => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    },
    handleSelect(item) {
      const { url, name, level } = item;
      this.menuVuex({ name, url, level });
      this.$router.push({ path: url });
    },
    change(e) {
      if (Number(e) === 3) {
        this.$alert("vue3功能还在开发中，暂未开放", "温馨提示", {
          confirmButtonText: "确定",
          callback: (action) => {
            console.log("action: " + action);
            return false;
          },
        });
        this.vueValue = "2";
        return false;
      }
      console.log(e);
    },
  },
};
</script>

<style lang="scss">
::v-deep .el-autocomplete-suggestion__wrap {
  margin-bottom: -15px;
}

.vue-version {
  width: 100px;
  margin-left: 8px;
}
</style>
