import axios from "axios";
import { ElMessage } from "element-plus";
import { overrideHttpType } from "./overrideHttpType";

export const _http = axios.create({
  timeout: 1000 * 60,
  baseURL: "/api",
});

_http.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    ElMessage.error(err.message);
    throw err;
  }
);

_http.interceptors.response.use(
  (response) => {
    // 如果401是未登录状态, 则跳转到登录页面
    if (response.data.code == "401") {
      throw response.data;
    }
    if (response.data.code != "200") {
      ElMessage.error(response.data.message);
      throw response.data;
    }
    return response.data;
  },
  (err) => {
    ElMessage.error(err.message);
    throw err;
  }
);

export const http = overrideHttpType(_http);
