import React from "react"
import style from "./index.module.scss"
import { Button } from "antd"
const Header: React.FC = () => {
  return <div className={`app-flex app-flex-end ${style.header}`}>
    <Button type="primary">登录</Button>
  </div>
}

export default Header;