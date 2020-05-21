/*header
    > File Name: index.tsx
    > Create Time: 2020-01-20 星期一 17时24分02秒
    > Athor: ouermaimeng
*/

import React from "react"
import ListItem from "./articleItem/listItem"
import style from "./index.module.scss"
const ArticleList: React.FC = () => {
  return <div className={style.articleList}>
    {
      Array.from({ length: 10 }).map((_, index) => (<ListItem key={index}></ListItem>))
    }
  </div>
}

export default ArticleList;