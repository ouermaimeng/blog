import KoaRouter from "koa-router"
import { User } from "../models/users"
// import article from "@/controllers/article"
import article from "@/controllers/article"
const Router = new KoaRouter();

// 
Router.get('/graphql', async (ctx) => {
  ctx.body = {
    status: "OK",
    content: await User.find()
  }
})
  .get('/getArticleList', article.getArticleList)


export default Router;
