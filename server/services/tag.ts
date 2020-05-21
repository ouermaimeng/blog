import TagEntity, { Tag } from "@/models/tags"

/**
 * 获取所有标签
 * @returns {Promise[]}
 */
export const getTagList = async () => {
  return await Tag.find()
}

/**
 * @description 新增标签
 * @param {string} tag
 */
export const updateTag = async (tag: string) => {
  return await TagEntity.update({ tag })
}