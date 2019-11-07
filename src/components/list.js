import React from 'react'
// 通过props可以接受connect处理后的组件传递的数据
export default function TodoList(props) {
  return (
    <div>
      {
        props.todos.map(item => {
          // 传入{...item} 让子组件可以获取到数据
          return <TodoItem 
            key={item.id} {...item}
            delTodos={props.delTodos}
            chgTodos={props.chgTodos}
          ></TodoItem>
        })
      }
    </div>
  )
}

// 列表中的每一项为一个组件
// 可以解构props  ({chgTodos,delTodos,id,name,flag})
function TodoItem(props) {
  //接受父组件{...item}传递的数据
  return (
    <div>
      <span 
        style={{textDecoration: !props.flag ? '' : "line-through"}}
        onClick={() => props.chgTodos(props.id)}>{props.name}
      </span>{' '}
      <span 
        onClick={() => props.delTodos(props.id)}
      >X</span>
    </div>
  )
}