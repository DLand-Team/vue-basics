<template>
  <div style="padding: 20px">
    <el-row class="mb-4">
      <el-space>
        <el-input style="width: 300px" v-model="queryList.name"></el-input>
        <el-button type="primary" @click="fetchTableData">Search</el-button>
      </el-space>
    </el-row>
    <el-table :data="tableList" style="width: 100%">
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
      <el-table-column label="Actions" >
        <template v-slot="{row}">
          <el-button type="primary" @click="action(row)">Search</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { fetchTableData } from "../apis/demo";
import { ElMessage } from "element-plus";

export default {
  data() {
    return {
      queryList: {
        pageNum: 1,
        pageSize: 10,
        name: "",
      },
      tableList: [],
    };
  },
  mounted() {
    this.fetchTableData();
  },
  methods: {
    action(d) {
      console.log(d)
    },
    async fetchTableData() {
      try {
        // todo: add a loading
        const res = await fetchTableData(this.queryList);
        this.tableList = res.data;
      } catch (e) {
        ElMessage({
          message: e.message,
          type: "error",
        });
      }
    },
  },
};
</script>
