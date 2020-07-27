import KoaCompose from "koa-compose"
import Article from "./article"

const router = KoaCompose([Article.routes(), Article.allowedMethods()]);

export default router
