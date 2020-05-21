import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Spin } from 'antd';

const Publish = lazy(() => import("@/views/publishArticle"))
const Index = lazy(() => import("@/views/index"))
const App: React.FC = () => {
  return <BrowserRouter>
    <Suspense fallback={<Spin />}>
      <Switch>
        <Route path="/publish" exact component={Publish}></Route>
        <Route path="/" component={Index}></Route>
      </Switch>
    </Suspense>
  </BrowserRouter>
}

export default App;
