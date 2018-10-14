import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

import { combineReducers, createStore } from 'redux'

// => BUT... How we App(UI Component) access our STORE?
// Using `Provider` 
// In component we need "connect" to connect UI Component and "STORE"
import { Provider } from 'react-redux'

// Wrapping our <App /> inside <Provider>
// and passing STORE to it
// ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))



// === REDUCERS ===
// => move reducers to separate folder
// and then import it
import productsReducer from './reducers/products-reducer'
import userReducer from './reducers/user-reducer'


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
// and passing STORE to it
// 
// In component we need "connect" to connect UI Component and "STORE"
ReactDOM.render(
  <Provider store={store}>
    {/* <App /> */}

    {/* Passing own props */}
    {/* 在 mapStateToProps, mapActionsToProps 的第二个参数可以访问得到 */}
    <App aRandomProps="whatever" bRandomProps="whatever again" />
  </Provider>, 
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
