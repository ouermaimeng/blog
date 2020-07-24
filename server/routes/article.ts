import KoaRouter from "koa-router"
import article from "@/controllers/article"
const router = new KoaRouter();

router.get('/getArticleList', article.getArticleList)


export default router;