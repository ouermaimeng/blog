import React, { useState, useEffect, Suspense, ReactType } from "react"
import { useRequest } from "@/hooks/useRequest"
import ListItem from "./articleItem/listItem"
import Spin from "antd"
import style from "./index.module.scss"
import Api from "@/request"
const ArticleList: React.FC = () => {
  const { data, loading, request } = useRequest<ReturnType<typeof Api.getArticleList>>(Api.getArticleList)
  const getArticleList = async () => {
    try {
      const res = await Api.getArticleList();
    } catch (error) {

    }
  }
  useEffect(() => {
    getArticleList()
  }, [])
  return <Suspense fallback={Spin}>
    <div className={style.articleList}>
      {
        Array.from({ length: 10 }).map((_, index) => (<ListItem key={index}></ListItem>))
      }
    </div>
  </Suspense>
}

export default ArticleList;