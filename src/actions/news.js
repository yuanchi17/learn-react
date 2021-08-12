exports.addNewsObj = news => ({
  type: 'ADD_NEWS',
  payload: { news },
})

exports.delNewsObj = nid => ({
  type: 'DEL_NEWS',
  payload: { nid },
})
