import $ from 'jquery'

export const UPDATE_USER = '@USERS/UPDATE_USER'
export const SHOW_SUCCESS = '@USERS/SHOW_SUCCESS'
export const SHOW_ERROR = '@USERS/SHOW_ERROR'

export function updateUser(newUser) {
  return {
    type: UPDATE_USER,
    payload: {
      user: newUser
    }
  }
}

// Handle API SUCCESS
export function showSuccess(response) {
  return {
    type: SHOW_SUCCESS,
    payload: {
      user: response.name
    }
  }
}

// Handle API ERROR
export function showError() {
  return {
    type: SHOW_ERROR,
    payload: {
      user: 'ERROR'
    }
  }
}

// Making API Request/ASYNC operatoer
export function apiRequest() {
  return dispatch => {
    $.ajax({
      url: 'https://api.github.com/users/google',
      success(res) {
        console.log('SUCCESS => ', res)
        dispatch(showSuccess(res))
      },
      error(error) {
        console.log('ERROR => ', error)
        dispatch(showError())
      }
    })
  }
}


