<template>
  <div>{{ getMenuName }}</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ContentHeader",
  computed: {
    ...mapGetters(["getMenuName"]),
  },
};
</script>

<style></style>
