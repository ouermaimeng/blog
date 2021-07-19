import mongoose from "mongoose"
import { dbInfo } from "@/config/config"
export const db = async () => mongoose.connect(`mongodb://${dbInfo.url}`, { dbName: dbInfo.dbName })