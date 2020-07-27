import mongoose, { Schema, Document } from "mongoose"
import { UserInterface as UT } from "commonInterface/modelcommon"
export interface UserInterface extends UT, Document {
  _id: UT['_id'],
}

// schema
export const usersSechema: Schema = new Schema({
  _id: String,
  username: String,
  password: String,
  canwrite: Boolean
})

// model
export const User = mongoose.model<UserInterface>('Users', usersSechema);

//entity
export default new User();