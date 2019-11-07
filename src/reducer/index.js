// 第二步，创建reducer 
// 1. 引入action中创建的类型
// import { addTodos, delTodos, chgTodos } from '../action'
import '../action'
// 导出两个reducer需要引入
import { combineReducers } from "redux"

// 2. state为默认参数
// const initTodos = [
//   {
//     id: 1,
//     name: '马超',
//     flag: false
//   },
//   {
//     id: 2,
//     name: '赵云',
//     flag: false
//   },
//   {
//     id: 3,
//     name: '韩信',
//     flag: true
//   }
// ]

// 2.1 数据持久化
const initTodos = JSON.parse(window.localStorage.getItem("list")) || []

const todosReducer = (state = initTodos, action) => {
  let editTodoList;
  switch(action.type) {
    // 3. redux是不改变原来数据的（是只读的）,所以返回的是新数据
    case 'ADD_TODOS':
      editTodoList = [
        ...state,
        {
          id: state.length > 0 ? state[state.length - 1].id + 1 : 1,
          name: action.title,
          flag: false,
        }
      ]
      window.localStorage.setItem("list",JSON.stringify(editTodoList))
      return editTodoList
    case 'DEL_TODOS':
      editTodoList = state.filter(item => {
        return item.id !== action.id
      })
      window.localStorage.setItem("list",JSON.stringify(editTodoList))
      return editTodoList
    case 'CHG_TODOS':
      editTodoList =  state.map(item => {
        return {
          ...item,
          flag: item.id === action.id ? !item.flag : item.flag
        }
      })
      window.localStorage.setItem("list",JSON.stringify(editTodoList))
      return editTodoList
    default: 
      // throw new Error('形势不对了');
      return state
  }
}

// 声明第二个reducer
// 用来操作redux中保存的过滤的数据(底部三个按键)
// 默认显示全部all
const filter = (state = "all",action) =>{
  switch(action.type){
    case "FILTER_TODOS": 
      return action.filter
    default: 
      return state
  }
}

// 导出两个ruducer,需要引入combineReducers
export default combineReducers({
  todosReducer,
  filter
})
