import { Context } from "koa"
import { getArticle } from "@/services/article"
export default {
  /**
   * 获取文章列表
   */
  async getArticleList(ctx: Context): Promise<void> {
    const { keywords } = ctx.request.body
    const content = await getArticle(keywords);
    ctx.body = {
      status: ctx.state.status.ok,
      content
    };
  },
}