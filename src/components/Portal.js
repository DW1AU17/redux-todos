import React from "react"
import ReactDOM from 'react-dom'

// Portal组件的介绍
// 可以用在模态框的遮罩层中
 
export default function() {
  return (
    <div>
      <h1>Portal组件的展示</h1>
      {/* 组件是body的子元素 */}
      {ReactDOM.createPortal(<div>这不是外面的div的子元素</div>, document.body)}
    </div>
  )
}