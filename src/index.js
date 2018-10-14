import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

import { combineReducers, createStore } from 'redux'

// => BUT... How we App(UI Component) access our STORE?
// Using `Provider` 
import { Provider } from 'react-redux'

// Wrapping our <App /> inside <Provider>
// ReactDOM.render(<Provider><App /></Provider>, document.getElementById('root'))



function productsReducer(state = [], action) {
  return state
}

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



// Seeing Our STORE
console.log(store.getState())



// => How we App(UI Component) access our STORE?
// Using `Provider` and then Wrapping our <App /> inside <Provider>
ReactDOM.render(
  <Provider>
    <App />
  </Provider>, 
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
