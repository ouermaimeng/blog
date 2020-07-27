// 文章
export interface ArticleInterface {
  _id: string,
  title: string,
  content: string,
  tags: Array<TagInterface['tag']>,
  userid: string,
  createTime: string,
  updateTime: string,
}

// tag
export interface TagInterface {
  _id: string,
  tag: string
}

// 用户
export interface UserInterface {
  _id: string,
  username: string,
  password: string,
  canwrite: boolean,
}