export const UPDATE_USER = '@USERS/UPDATE_USER'

export function updateUser(newUser) {
  return {
    type: UPDATE_USER,
    payload: {
      user: newUser
    }
  }
}