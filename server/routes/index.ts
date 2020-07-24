import KoaCompose from "koa-compose"
import Article from "./article"

const router = KoaCompose([Article]);

export default router
