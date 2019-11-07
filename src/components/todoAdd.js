import React,{Component} from 'react'
// 使用函数组件直接在这引入方法
import { addTodos } from '../action'

// import React, {Component} from 'react'

// 创建添加组件
// // 方法一: 通过类组件实现
// export default class TodoAdd extends Component {
//   // 创建一个初始数据 , 关联input中的数据
//   state = {
//     title: '',
//   } 
//   // form 中的按钮保存时会默认触发onsubmit方法
//   submitAddTodo = e => {
//     // 如果值存在那么添加
//     this.state.title && this.props.addTodos(this.state.title)
//     // 清空输入框

//     // 并且有默认事件
//     e.preventDefault();
//   }
//   render() {
//     return (
//       <div>
//         <form onSubmit={this.submitAddTodo}>
//           <input 
//             type="text" 
//             value={this.state.title}
//             onChange={e => this.setState({title: e.target.value})}
//             // 通过e.target.value获取input输入框的值
//             />
//           <button>保存</button>
//         </form>
//       </div>
//     )
//   }
// }

// 方法二: 通过函数组件 ( 这种不常用 )
export default function (props) {
  // 1. 通过refs获取非受控组件的值,创建refs实例
  const titleInput = React.createRef()
  return (
    <div>
      <form onSubmit = {
        e => {
          // 3. 获取实例titleInput的值
          const value = titleInput.current.value
          // 4. 调用添加的方法
          value && props.dispatch(addTodos(value))
          // 5. 清空输入框 把titleInput.current.value值设为空 
          titleInput.current.value = ""
          e.preventDefault()
        }   
      }>
        {/* 2. 添加实例 ref */}
        <input type="text" ref={titleInput}/>
        <button>save</button>
      </form>
    </div>
  )
}


