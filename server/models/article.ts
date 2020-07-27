import mongoose, { Schema, Document } from "mongoose";
import { ArticleInterface as AT } from "commonInterface/modelcommon"
export interface ArticleInterface extends AT, Document {
  _id: AT['_id']
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
