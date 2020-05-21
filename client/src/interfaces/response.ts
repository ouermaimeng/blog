/*header
    > File Name: response.ts
    > Create Time: 2020-01-20 星期一 16时24分58秒
    > Athor: ouermaimeng
*/

import status from "../../../config/status"

// 接口返回值的类型
export interface Response<T> {
  status: status;
  content?: T | null;
  msg?: string;
}