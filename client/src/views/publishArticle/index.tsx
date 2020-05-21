import React from "react"
import { Select, Input, Button } from "antd"
import md from "@/config/markdownConfig"
import style from "./index.module.scss"
const { TextArea } = Input
const Publish: React.FC = () => {
  return <div className={`app-flex-column ${style.publish}`}>
    <Input placeholder="请输入标题"></Input>
    <Select placeholder="请选择标签" mode="multiple" style={{ width: '100%', margin: '20px 0' }}></Select>
    <Input placeholder="请输入摘要"></Input>
    <div className={`app-flex app-flex-rest ${style.md}`}>
      <TextArea className='app-flex-rest' style={{ height: '100%' }}></TextArea>
      <div className={style.preview}></div>
    </div>
    <div className="app-flex app-flex-end">
      <Button type="primary">发布</Button>
    </div>
  </div>
}
export default Publish;