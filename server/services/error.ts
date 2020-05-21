/*header
    > File Name: error.ts
    > Create Time: 2020-01-20 星期一 10时30分57秒
    > Athor: ouermaimeng
*/

import * as path from "path";
import * as log from "log4js";
import status from "../config/status";
// 日志
log.configure({
  appenders: {
    cheese: {
      type: "file",
      filename: path.join(__dirname, "../log/log.log")
    }
  },
  categories: { default: { appenders: ["cheese"], level: "trace" } }
});
const logger = log.getLogger("blog");
/**
 * 错误处理
 *
 * @param {any} ctx
 * @param {any} next
 */
export default async (ctx: any, next: any) => {
  try {
    ctx.state.status = status;
    await next();
  } catch (e) {
    logger.trace(e.stack);
    if (!ctx.status) {
      ctx.status = 500;
    }
    ctx.body = {
      status: ctx.state.status.wrong,
      msg:
        (e.errors && e.errors[0].message) ||
        (e.message && e.message) ||
        "服务器异常"
    };
  }
};