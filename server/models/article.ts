import { Schema } from "mongoose";
import { db } from "@/db/db";

// schema
export const ArticleSchema = new Schema({
  _id: String,
  title: String,
  content: String,
  tags: [String],
  userid: String,
  createTime: String,
  updateTime: String
})

// model
export const Article = db.model('Articles', ArticleSchema)

// entity
export default new Article();
