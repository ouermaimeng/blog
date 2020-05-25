import mongoose from "mongoose"
export const db = () => mongoose.createConnection('mongodb://localhost', { dbName: 'blog' })