import mongoose, { Schema, Document } from "mongoose"

export interface UserInterface extends Document {
  _id: string,
  username: string,
  password: string,
  canwrite: boolean,
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