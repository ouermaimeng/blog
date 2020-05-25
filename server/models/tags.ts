import mongoose, { Schema, Document } from "mongoose"

// interface
export interface TagInterface extends Document {
  _id: string,
  tag: string
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