import React from 'react';
import style from "./index.module.scss"
import Left from "@/views/left"
import Right from "@/views/right"
const Index: React.FC = () => {
  return <div className={`app-flex ${style.index}`}>
    <Left></Left>
    <Right></Right>
  </div>
}

export default Index;
