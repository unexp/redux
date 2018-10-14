import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// In component we need "connect" to connect UI Component and "STORE"
import { connect } from 'react-redux'
import { updateUser } from './actions/user-action' 

import { bindActionCreators } from 'redux'



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



  render() {
    // console.log(this.props)

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
const mapStateToProps = (state, props) => {
  // 在使用 UI Components 的时候你可以随意传入 props: <App aRandomProps="whatever" />
  // 着这里可以访问得到
  // console.log('props by passing from Components', props)

  return {
    products: state.products,
    user: state.user,

    // 用户传进来的 props 
    userPlusProp: `${state.user} ${props.aRandomProps}`
  }
}

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
    onUpdateUser: updateUser
  }, dispatch)
}


// 接收三个入参
// 使用场景？
const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
  console.log('propsFromState => ', propsFromState)
  console.log('propsFromDispatch => ', propsFromDispatch)
  console.log('ownProps => ', ownProps)

  return {}
}


// In component we need "connect" to connect `UI Component` and "STORE"
// connect() 接收三个入参
export default connect(mapStateToProps, mapActionsToProps, mergeProps)(App);
