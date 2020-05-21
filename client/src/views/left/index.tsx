import React from "react";
import { useHistory } from "react-router-dom"
import style from "./index.module.scss"
import { Button } from "antd"
const Left: React.FC = () => {
  const history = useHistory();

  const jumpPublish = () => {
    history.push('/publish')
  }

  return <div className={`app-flex-column app-flex-center app-flex-column-center ${style.index}`}>
    <img src={require('@/assets/images/defaultPic.jpg')} alt="" />
    <Button type="link" size="large" onClick={() => jumpPublish()}>发表文章</Button>
  </div>
}

export default Left;