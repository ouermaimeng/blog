import React, { useState, useEffect, Suspense } from 'react'
import { useRequest } from '@/hooks/useRequest'
import { Spin } from 'antd'
import style from './index.module.scss'
import Api from '@/request'
import { GetArticleList } from '@/interfaces/api'
const ListItem = React.lazy(() => import('./articleItem/listItem'))

const ArticleList: React.FC = () => {
	const { data } = useRequest<GetArticleList>(Api.getArticleList)
	return (
		<div className={`app-flex-rest ${style.articleList}`}>
			{data.map((item, index) => (
				<ListItem key={index}></ListItem>
			))}
		</div>
	)
}

export default ArticleList
