import React from "react"
import { Tag } from "antd"
import style from "./index.module.scss"
const ArticleContent: React.FC = () => {
  return <div className={`app-flex-column ${style.index}`}>
    <h1>详情</h1>
    <div className={`app-flex app-flex-between`}>
      <Tag color="blue">javascipt</Tag>
      <div className={`app-flex`}>
        <div className={style.time}>创建日期:2019-01-01</div>
        <div>最近修改:2019-10-10</div>
      </div>
    </div>
  </div>
}
export default ArticleContent;