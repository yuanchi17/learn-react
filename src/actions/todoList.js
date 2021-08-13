exports.DoneItem = id => ({
  type: 'TODOLIST_DONE',
  payload: { id },
})

exports.DelItem = id => ({
  type: 'TODOLIST_DEL',
  payload: { id },
})
