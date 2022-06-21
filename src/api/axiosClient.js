import axios from "axios";
import axiosConfig from "./apiConfig";
import queryString from "query-string";
import apiConfig from "./apiConfig";

// import { API_KEY } from "../constants/apiKey";
// const axiosClient = axios.create({
//   baseUrl: "https://ga-mobile-api.loklok.tv/cms/app/",
//   headers: {
//     lang: "en",
//     versioncode: "11",
//     clienttype: "ios_jike_default",
//     // "content-type": "application/json",
//   },
// });

const axiosClient = axios.create({
  baseURL: axiosConfig.baseUrl,
  headers: {
    // api_key: API_KEY,
    "content-type": "application/json",
  },
  paramsSerializer: (params) =>
    queryString.stringify({ ...params, api_key: apiConfig.apiKey }),
});

// interceptors chặn yêu cầu or phản hồi trước khi được xử lý
axiosClient.interceptors.request.use(async (config) => config);

axiosClient.interceptors.request.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (err) => {
    throw err;
  }
);

export default axiosClient;
