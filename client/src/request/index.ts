import request from "./request"
import { GetArticleList } from "@/interfaces/api"

export default {
  getArticleList: () => request<GetArticleList>('/api/getArticleList'),//文章列表
}