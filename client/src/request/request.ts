import { message } from "antd";
import { Response } from "../interfaces/response";
/**
 * @function 简单的封装
 * @param {string} url
 * @param {Object} data 参数
 */
const request = <T>(url: string, method = 'get', data = {}): Promise<Response<T>> =>
  fetch(url, {
    method,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
      // Authorization: localStorage.getItem("token") || ""
    },
    // 不加 fetch默认会忽略请求返回的set-cookie的响应头,
    credentials: "same-origin",
    ...data
  })
    .then((res: any) => res.json(), err => console.log(err))
    .then(res => {
      if (res.status === "OK") {
        return res;
      } else {
        message.error(res.msg);
        return Promise.reject(res);
      }
    });
export default request;
