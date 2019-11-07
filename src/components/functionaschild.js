import React from 'react'

// 函数作为children使用
export default function(props) {
  console.log(props)
  return (
    <div>
      {/* 函数通过 children 接受 */}
      {props.children()}
    </div>
  )
}   