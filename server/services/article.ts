import { Article } from "@/models/article"

/**
 * 查询所有文章
 * @param {string} tagId
 */
export const getArticle = async (keywords?: string) => {
  return Article.find({ tags: keywords })
}