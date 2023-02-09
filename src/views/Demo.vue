<template>
  <div style="padding: 20px">
    <el-row class="mb-4">
      <SearchInput
        :value="queryList.name"
        @input-value="input"
        :loading="loading"
        @search="fetchData"
      />
    </el-row>
    <el-table :data="tableList" style="width: 100%" v-loading="loading">
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
      <el-table-column label="Actions">
        <template v-slot="{ row }">
          <el-button type="primary" @click="action(row)">action</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { fetchTableData } from "../apis/demo";
import { ElMessage } from "element-plus";
import SearchInput from "@/components/SearchInput.vue";

export default {
  components: {
    SearchInput,
  },
  data() {
    return {
      queryList: {
        pageNum: 1,
        pageSize: 10,
        name: "",
      },
      loading: false,
      tableList: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    action(d) {
      console.log(d);
    },
    input(v) {
      console.log(v);
      this.queryList.name = v;
    },
    async fetchData() {
      try {
        if (this.loading) {
          return;
        }
        this.loading = true;
        // todo: add a loading
        const res = await fetchTableData(this.queryList);
        this.tableList = res.data;
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
