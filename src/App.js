import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// In component we need "connect" to connect UI Component and "STORE"
import { connect } from 'react-redux'
import { updateUser, apiRequest } from './actions/user-action' 

import { bindActionCreators } from 'redux'


// Using reselect package
import { createSelector } from 'reselect'


class App extends Component {
  constructor(props) {
    super(props)

    this.onUpdateUser = this.onUpdateUser.bind(this)
  }

  // onUpdateUser() {
  //   this.props.onUpdateUser('Sammy') // hardcode 'Sammy' here
  // }

  // value from input
  onUpdateUser(event) {
    this.props.onUpdateUser(event.target.value)
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.onApiRequest()
    }, 2000)
  }

  render() {
    console.log('this.props => ', this.props)

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

          {/* 我们不想每次调用都去 xxx.bind(this), 所以在 constructor() 里面去绑定 */}
          {/* <div onClick={this.onUpdateUser.bind(this)}></div> */}


          {/* <div onClick={this.onUpdateUser}>Click me to update user</div> */}
          {/* <div>{this.props.user}</div> */}


          {/* 上面我们调用 this.onUpdateUser('Sammy') 我们写死了入参，很多实现是需要用户输入或者从其它地方获取的 */}
          {/* 我们把把 <div> 换成 <input>: */}
          <input onChange={this.onUpdateUser} />
          <div>{this.props.user}</div>

        </header>
      </div>
    );
  }
}

// export default App;


// => After using connect()


// mapStateToProps => Mapping current state to UI Component
// const mapStateToProps = state => {
//   return state
// }

// 通常我们都会选择当前 UI Component 需要的 state
// const mapStateToProps = state => ({
//   products: state.products,
//   user: state.user
// })


// 通常我们都会选择当前 UI Component 需要的 state
// By Using passed props
// const mapStateToProps = (state, props) => {
//   // 在使用 UI Components 的时候你可以随意传入 props: <App aRandomProps="whatever" />
//   // 着这里可以访问得到
//   // console.log('props by passing from Components', props)

//   return {
//     products: state.products,
//     user: state.user,

//     // 用户传进来的 props 
//     userPlusProp: `${state.user} ${props.aRandomProps}`
//   }
// }


// 使用 reselect 可以更简洁的写 mapStateToProps
// const mapStateToProps = createSelector(
//   state => state.products,
//   state => state.user,
//   (products, user) => ({
//     products,
//     user
//   })
// )

// reselect 可以再分解
const productsSelector = createSelector(
  state => state.products,
  products => products
)

const userSelector = createSelector(
  state => state.user,
  user => user
)

const mapStateToProps = createSelector(
  productsSelector,
  userSelector,
  (products, user) => ({
    products,
    user
  })
)



// UI Component 交互时候需要的 ACTIONS
// const mapActionsToProps = {
//   onUpdateUser: updateUser
// }

// UI Component 交互时候需要的 ACTIONS
// bindActionCreator, passed props 
// bindActionCreator -- 使用场景？
const mapActionsToProps = (dispatch, props) => {
  // 在使用 UI Components 的时候你可以随意传入 props: <App aRandomProps="whatever" />
  // 着这里可以访问得到
  // console.log('props by passing from Components', props)


  return bindActionCreators({
    onUpdateUser: updateUser,
    onApiRequest: apiRequest
  }, dispatch)
}


// 接收三个入参
// 使用场景？
const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
  console.log('propsFromState => ', propsFromState)
  console.log('propsFromDispatch => ', propsFromDispatch)
  console.log('ownProps => ', ownProps)

  return { ...propsFromState, ...propsFromDispatch, ...ownProps }
}


// In component we need "connect" to connect `UI Component` and "STORE"
// connect() 接收三个入参
export default connect(mapStateToProps, mapActionsToProps, mergeProps)(App);


// 需要注意一点：Smart vs. dumb components
// 应该尽量少的组件（一个模块组件的最顶端组件）直接去和 STORE connect 起来
// <Feed>
//  <Tweet>
//    <Like></Like>
//  </Tweet>
// </Feed>
// 应该只有 <Feed> 和 STORE connect, 子组件需要的 data 通过 props 传下去
// 
// 尽量保证少的 Smart Component ( connected STORE component)

