import Koa from "koa"
import bodyparser from "koa-bodyparser"
import ErrorHandler from "./services/error"
import Router from "./routes"
import { db } from "@/db/db"
const app = new Koa();

db();
app.use(ErrorHandler)
app.use(bodyparser())
app.use(Router.routes())

app.listen(8080, "192.168.200.71", () => {
  console.log('server start 8080')
})