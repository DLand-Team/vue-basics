<template>
  <div style="padding: 20px">
    <el-row class="mb-4">
      <SearchInput
        :value="data.queryList.name"
        @input-value="input"
        :loading="data.loading"
        @search="fetchData"
      />
    </el-row>
    <el-table
      :data="data.tableList"
      style="width: 100%"
      v-loading="data.loading"
    >
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

<script setup lang="ts">
import type { TabelData } from "../apis/demo";
import { onMounted } from "vue";
import { useDemoStore } from "@/stores/demo";
import SearchInput from "@/components/SearchInput.vue";
const { data, fetchData } = useDemoStore();

onMounted(() => {
  fetchData();
});

function action(row: TabelData[number]) {
  console.log(row);
}
function input(v) {
  if (typeof v === "string") {
    data.queryList.name = v;
  }
}
</script>
