import PageLoading from '@/components/pageLoading'
import { Spin } from 'antd'
import React, { Suspense } from 'react'
import style from './index.module.scss'
const Left = React.lazy(() => import('@/views/left'))
const Right = React.lazy(() => import('@/views/right'))
const Index: React.FC = () => {
	return (
		<div className={`app-flex ${style.index}`}>
			<Suspense fallback={<PageLoading />}>
				<Left></Left>
			</Suspense>
			<Right></Right>
		</div>
	)
}

export default Index
