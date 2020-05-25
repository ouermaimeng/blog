import mongoose, { Schema, Document } from "mongoose";
import { TagInterface } from "./tags"

export interface ArticleInterface extends Document {
  _id: string,
  title: string,
  content: string,
  tags: Array<TagInterface['tag']>,
  userid: string,
  createTime: string,
  updateTime: string,
}

// schema
export const ArticleSchema: Schema = new Schema({
  _id: String,
  title: String,
  content: String,
  tags: [String],
  userid: String,
  createTime: String,
  updateTime: String
})

// model
export const Article = mongoose.model<ArticleInterface>('Articles', ArticleSchema)

// entity
export default new Article();
