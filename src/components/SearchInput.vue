<template>
  <el-space>
    <input :value="value" @input="onValueChange" />
    <el-button :disabled="loading" @click="onSearchBtnClick" type="primary"
      >Search</el-button
    >
  </el-space>
</template>
<script>
export default {
  props: {
    value: {
      type: String,
      default: "",
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    value(v) {
      console.log("watch", v);
    },
  },
  methods: {
    onValueChange(e) {
      this.$emit("input-value", e?.target?.value || e);
    },
    onSearchBtnClick() {
      this.$emit("search");
    },
  },
};
</script>
