import { connect } from "react-redux"
import todoAdd from "../components/todoAdd"

// 使用函数组件不需要这边方法, 直接在原始组件中引入 
// import { addTodos } from "../action"  

// const mapActionToProps = dispatch => {
//   return {
//     addTodos(title) {
//       dispatch(addTodos(title))
//     }
//   }
// }

// const todoAddContainer = connect(null,mapActionToProps)(todoAdd)
// ----以上

// 第一个括号不传入任何参数: 则dispatch方法会直接被传入组件中
const todoAddContainer = connect()(todoAdd)

export default todoAddContainer