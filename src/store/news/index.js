const initState = {
  news: [
    { id: 1, title: '我是新聞 1', text: '今天天氣晴' },
    { id: 2, title: '我是新聞 2', text: '齊心防疫，同島一心' },
    { id: 3, title: '我是新聞 3', text: '居家防疫' },
    { id: 4, title: '我是新聞 4', text: '希望疫情趕快結束！' },
  ],
}

const news = (state = initState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default news
