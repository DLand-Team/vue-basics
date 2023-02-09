import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";
import { fetchTableData, type TabelData } from "@/apis/demo";
import { ElMessage } from "element-plus";

export const useDemoStore = defineStore("demo", () => {
  const data = reactive({
    queryList: {
      pageNum: 1,
      pageSize: 10,
      name: "",
    },
    tableList: [] as TabelData,
    loading: false,
  });
  async function fetchData() {
    try {
      if (data.loading) {
        return;
      }
      data.loading = true;
      const res = await fetchTableData(data.queryList);
      data.tableList = res.data;
    } finally {
      data.loading = false;
    }
  }
  return {
    data,
    fetchData,
  };
});
