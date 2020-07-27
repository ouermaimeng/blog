import mongoose, { Schema, Document } from "mongoose"
import { TagInterface as TT } from "commonInterface/modelcommon"
// interface
export interface TagInterface extends TT, Document {
  _id: TT['_id'],
}

// schema
export const TagSchema: Schema = new Schema({
  _id: String,
  tag: String
})

// model
export const Tag = mongoose.model<TagInterface>('Tags', TagSchema);

// entity
export default new Tag()