// 使用redux 
// 第一步创建action对象， 并返回

// 增 (通过内容增加)
export const addTodos = title => {
  return {
    type: 'ADD_TODOS',
    title
  }
}

// 删 （通过id删除）
export const delTodos = id => {
  return {
    type: 'DEL_TODOS',
    id
  }
}

// 改变状态 （通过id）
export const chgTodos = id => {
  return {
    type: 'CHG_TODOS',
    id
  }
}

// 筛选
export const filterTodos = filter => {
  return {
    type: 'FILTER_TODOS',
    filter
  }
}