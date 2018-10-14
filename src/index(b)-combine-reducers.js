import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

// => to create "STORE" we use `createStore`
// import { createStore } from 'redux'

// => in real world we need not only onw reducer
import { combineReducers, createStore } from 'redux'

function productsReducer(state = [], action) {
  return state
}


// function userReducer(state = '', action) {
//   return state
// }

// => Reducer seeing the action comming
// response to update STORE
// function userReducer(state = '', action) {
//   // store Seeing the Action
//   switch (action.type) {
//     case 'UPDATE_USER':
//       return action.payload
    
//     default:
//       return state
//   }
// }

// => USING ES6 destructing features
function userReducer(state = '', { type, payload }) {
  // store Seeing the Action
  switch (type) {
    case 'UPDATE_USER':
      return payload
    
    default:
      return state
  }
}

// => Combine ALL reducers
const allReducers = combineReducers({
  produces: productsReducer,
  user: userReducer
})

// => create "STORE" by passing allReducers
// const store = createStore(allReducers)


// => 有时候我们需要初始化一些默认的数据 (init store)
// createStore 的第二个入参
// const store = createStore(allReducers, {
//   produces: [{ name: 'iPhone' }],
//   user: 'Michael'
// })


// => 你也许喜欢 redux Chrome dev tool
// createStore 的第三个入参
const store = createStore(
  allReducers, 
  {
    produces: [{ name: 'iPhone' }],
    user: 'Michael'
  },
  window.devToolsExtension && window.devToolsExtension()
)



// => Try update our store
const updateUserAction = {
  type: 'UPDATE_USER',
  payload: {
    user: 'John'
  }
}
store.dispatch(updateUserAction)



// Seeing Our STORE
console.log(store.getState())


ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
