import { UPDATE_USER, SHOW_SUCCESS, SHOW_ERROR } from '../actions/user-action'

// => USING ES6 destructing features
export default function userReducer(state = '', { type, payload }) {
  // store Seeing the Action
  switch (type) {
    // case 'UPDATE_USER':
    case UPDATE_USER:
      return payload.user
    
    case SHOW_ERROR:
      return payload.user
    
    case SHOW_SUCCESS:
      return payload.user
      
    default:
      return state
  }
}