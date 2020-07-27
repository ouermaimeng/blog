import { Article } from "@/models/article"

/**
 * 查询所有文章
 * @param {string} tagId
 */
export const getArticle = async (tagId?: string) => {
  return await Article.find({ [tagId && 'tags']: tagId })
}