import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from "@apollo/react-hooks"
import App from './views/App';
import "antd/dist/antd.css"
import './index.css';
import "./style/reset.scss"
import "./style/style.scss"
import * as serviceWorker from './serviceWorker';
import Client from "./config/graphql"

const AppWithApollo = () => (<ApolloProvider client={Client}>
  <App />
</ApolloProvider>)

ReactDOM.render(<AppWithApollo />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
