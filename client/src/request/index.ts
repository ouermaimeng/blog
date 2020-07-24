import request from "./request"
export default {
  getArticleList: () => request('/api/getArticleList')
}