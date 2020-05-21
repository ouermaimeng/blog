import React from "react"
import { Tag } from "antd"
import style from "./tagList.module.scss";
const TagList: React.FC = () => {
  return <div className={`app-flex ${style.tagList}`}>
    <Tag color="blue" style={{ cursor: "pointer" }}>abc</Tag>
  </div>
}

export default TagList