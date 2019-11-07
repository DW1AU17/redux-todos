import React from 'react';
import TodoList from './container/listContainer'
import AddTodos from './container/todoAddContainer'
import TodoFilter from './container/todoFilterContainer'
import { Route } from 'react-router-dom'
import Portal from './components/Portal'
import FunctionChild from './components/functionaschild'

import store from './store'
import {filterTodos} from './action'

function App(props) {
  // 一定要在组件外部引入app组件的地方使用 <Route path> 不然获取不到数据
  // 一进来就直接路由设置筛选参数
  store.dispatch(filterTodos(props.match.params.filter))
  return (
    <div>
      <AddTodos></AddTodos>
      <Route path="/:filter?" component={TodoList}></Route>
      <Route path="/:filter?" component={TodoFilter}></Route>
      <Portal></Portal>
      <FunctionChild>
        {
          () => {
            console.log(123)
          }
        }
      </FunctionChild>


    </div>
  );
}
export default App
