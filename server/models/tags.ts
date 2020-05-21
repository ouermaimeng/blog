import { Schema } from "mongoose"
import { db } from "@/db/db"

// schema
export const TagSchema = new Schema({
  _id: Schema.Types.ObjectId,
  tag: Schema.Types.String
})

// model
export const Tag = db.model('Tags', TagSchema);

// entity
export default new Tag()