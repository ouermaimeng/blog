import { Context } from "koa"
import { getArticle } from "@/services/article"
export default {
  /**
   * 获取文章列表
   */
  async getArticleList(ctx: Context): Promise<void> {
    const { tagId } = ctx.request.body
    const content = await getArticle(tagId);
    ctx.body = {
      status: ctx.state.status.ok,
      content
    };
  },
}