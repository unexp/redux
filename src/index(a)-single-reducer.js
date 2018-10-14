import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

// to create "STORE" we use `createStore`
import { createStore } from 'redux'

// => to create a "STORE" we need `reducer` function
// function reducer() {
//   return 'State'
// }

// => how reducer need seeing the ACTION
function reducer(state, action) {
  console.log('Reducer seeing the action: ', action)

  // REDUCER response to return new State
  if (action.type === 'CHANGE_STATE') {
    return action.payload.newState
  }

  return 'State'
}

// create "STORE"
const store = createStore(reducer)

// Seeing Our STORE
console.log(store.getState())

// === ACTION ===
const action = {
  type: 'CHANGE_STATE',
  payload: {
    newState: 'New state'
  }
}

store.dispatch(action)


// After dispatch an action, Seeing Our STORE
console.log(store.getState())


ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
