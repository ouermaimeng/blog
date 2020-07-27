import status from "../../../commonInterface/status"

// 接口返回值的类型
export interface Response<T> {
  status: status;
  content?: T | null;
  msg?: string;
}