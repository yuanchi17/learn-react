const initState = {
  todoItems: [
    { id: 1, title: '代辦事項 1' },
    { id: 2, title: '代辦事項 2' },
    { id: 3, title: '代辦事項 3' },
    { id: 4, title: '代辦事項 4' },
  ],
  doneItems: [
    { id: 5, title: 'done 事項 1' },
    { id: 6, title: 'done 事項 2' },
  ],
}

const todoList = (state = initState, action) => {
  switch (action.type) {
    case 'TODOLIST_DONE': {
      const selectId = action.payload.id
      return {
        ...state,
        todoItems: state.todoItems.filter((item, i) => i !== selectId),
        doneItems: [
          ...state.doneItems,
          state.todoItems[selectId],
        ],
      }
    }
    case 'TODOLIST_DEL': {
      const selectId = action.payload.id
      return {
        ...state,
        todoItems: state.todoItems.filter((item, i) => i !== selectId),
      }
    }
    default:
      return state
  }
}

export default todoList
