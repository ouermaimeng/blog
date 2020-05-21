import { Schema } from "mongoose"
import { db } from "../db/db"
// schema
export const usersSechema = new Schema({
  _id: Schema.Types.ObjectId,
  username: Schema.Types.String,
  password: Schema.Types.String,
  canwrite: Schema.Types.Boolean,
  articles: Schema.Types.Array
})

// model
export const User = db.model('Users', usersSechema);

//entity
export default new User();