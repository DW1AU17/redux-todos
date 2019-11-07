import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store'
// 引入方法
// import { addTodos, delTodos, chgTodos } from './action'
// 把react和redux关联， 安装react-redux
// Provider 包裹的组件可以获取store里的值 （但只是第一步）
import { Provider } from 'react-redux'
import {HashRouter as Router, Route } from 'react-router-dom'

// 测试功能是否成功
// 增
// store.dispatch(addTodos('奥特曼'))
// 删
// store.dispatch(delTodos(3))
// 改
// store.dispatch(chgTodos(2))
// 得到数据
// console.log(store.getState())

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/:filter?" component={App}></Route>
      {/* <App /> */}
    </Router>
  </Provider>
,document.getElementById('root'));

