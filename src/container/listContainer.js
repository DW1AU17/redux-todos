import { connect } from 'react-redux'
import TodoList from '../components/list'
import { chgTodos, delTodos } from '../action'

// 第一个参数是提供 数据 的映射
const mapStateToProps = state => {
  // 这边可以获取到 底部三个按钮返回的数值
  // 1.根据返回的值, return过滤的数据
  const dataType = state.filter
  const filterList  = state.todosReducer.filter(item=> {
    switch(dataType) {
      case 'all':
        return true
      case 'complate':
        return item.flag 
      case 'active':
        return !item.flag
      default: 
        throw new Error("形势不对")
    }
  })
  return { todos: filterList }
}
// 第二个参数是提供 方法 的映射
const mapActionToProps = dispatch => {
  return {
    chgTodos(id) {
      dispatch(chgTodos(id))
    },
    delTodos(id) {
      dispatch(delTodos(id))
    }
  }
}


const TodoListContainer = connect(mapStateToProps,mapActionToProps)(TodoList)

export default TodoListContainer