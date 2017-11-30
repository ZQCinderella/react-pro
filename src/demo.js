import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App'

// reducer
function items(state = [], action) {
  switch (action.type) {
    case 'LOAD_ITEMS':
      return [...action.payload]
    default:
      return state
  }
}

// 创建store
const store = createStore(items)

fetch('http://localhost:8888/items', {
  method: 'GET'
})
.then((response) => {
  // ok代表状态码在200-299
  if (!response.ok) throw new Error(response.statusText)
  return response.json()
})
.then((itemList) => {
  // 作dispatch动作，载入外部数据完成之后
  store.dispatch({ type: 'LOAD_ITEMS', payload: itemList })
})
.catch((error) => { throw new Error(error.message) })

// React组件加载到真实DOM上
ReactDOM.render(
<Provider store={store}>
 <App />
</Provider>, document.getElementById('root'))
