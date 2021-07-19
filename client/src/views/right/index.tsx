import React, { lazy, Suspense } from 'react'
import { Spin } from 'antd'
import { Route } from 'react-router-dom'

import style from './index.module.scss'
const Header = lazy(() => import('@/components/header'))
const ArticleList = lazy(() => import('@/components/articleList'))
const ArticleContent = lazy(() => import('@/components/articleContent'))

const Right: React.FC = () => {
	return (
		<div className={`app-flex-column app-flex-rest app-flex-column-center ${style.right}`}>
			<Header></Header>
			<Suspense fallback={<Spin tip="列表..." />}>
				<Route path="/" exact component={ArticleList}></Route>
				<Route path="/articleContent" exact component={ArticleContent}></Route>
			</Suspense>
		</div>
	)
}
export default Right
