import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import PageLoading from '@/components/pageLoading'
const Publish = lazy(() => import('@/views/publishArticle'))
const Index = lazy(() => import('@/views/index'))

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/publish" exact component={Publish}></Route>
				<Suspense fallback={<PageLoading />}>
					<Route path="/" component={Index}></Route>
				</Suspense>
			</Switch>
		</BrowserRouter>
	)
}

export default App
