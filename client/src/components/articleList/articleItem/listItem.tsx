/*header
    > File Name: listItem.tsx
    > Create Time: 2020-01-20 星期一 17时24分14秒
    > Athor: ouermaimeng
*/

import React from "react"
import { Link } from "react-router-dom"
import TagList from "./tagList"
import style from "./listItem.module.scss"
const ListItem: React.FC = () => {
  return <div className={`app-flex-column ${style.listItem}`}>
    <div className={style.title}>
      <Link to="articleContent">
        <span className={style.text}>TestTestTest</span>
      </Link>
    </div>
    <div className={style.content}>
      <TagList></TagList>
      <div className={style.abstract}>Source map就是一个信息文件，里面储存着位置信息。也就是说，转换后的代码的每一个位置，所对应的转换前的位置。 有了它，出错的时候，</div>
      <div>{new Date().toDateString()}</div>
    </div>
    <div className={style.line}></div>
  </div>
}

export default ListItem;