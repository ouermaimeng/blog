import React, { useEffect, lazy, Suspense } from "react"
import { Route } from "react-router-dom"
import { Spin } from "antd"

import style from "./index.module.scss"
import request from "../../request"

const Header = lazy(() => import('@/components/header'))
const ArticleList = lazy(() => import('@/components/articleList'))
const ArticleContent = lazy(() => import('@/components/articleContent'))

const Right: React.FC = () => {
  useEffect(() => {
    request('/api/graphql', {
      method: "get",
    }).then(data => {
      console.log(data)
    });
  }, [])
  return <div className={`app-flex-column app-flex-rest app-flex-column-center ${style.right}`}>
    <Suspense fallback={<Spin />}>
      <Header></Header>
      <Route path="/" exact component={ArticleList}></Route>
      <Route path="/articleContent" exact component={ArticleContent}></Route>
    </Suspense>
  </div>
}
export default Right;