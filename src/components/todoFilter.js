import React from "react"

export default function TodoFilter(props) {
  const btnList = ['all','complate','active']
  return (
    <div>
      筛选: {' '}
      {
        btnList.map((item,index) => {
          return <button 
              // 默认点击后禁用
              disabled={props.filter === item}
              key={index}
              onClick={() => {
                // props.filterTodos(item)
                // 第二种， 改变路由(直接跳转路由)
                props.history.push(item)
              }}
            >{item}</button>
        })
      }
    </div>
  )
}