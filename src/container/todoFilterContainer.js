import { connect } from "react-redux"
import TodoFilter from "../components/todoFilter"
import { filterTodos } from "../action"

const mapStateToProps = state => {
  return {
    filter: state.filter
  }
}

const mapActionToProps = dispatch => {
  return {
    filterTodos(filter) {
      dispatch(filterTodos(filter))
    }
  }
}


const TodoFilterContainer = connect(mapStateToProps,mapActionToProps )(TodoFilter)
export default TodoFilterContainer
