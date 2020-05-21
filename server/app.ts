import Koa from "koa"
import bodyparser from "koa-bodyparser"
import ErrorHandler from "./services/error"
import Router from "./routes"

const app = new Koa();

app.use(ErrorHandler)
app.use(bodyparser())
app.use(Router.routes())

app.listen(8080, "192.168.70.10", () => {
  console.log('server start 8080')
})