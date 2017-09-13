import { CREATE_POST, EDIT_POST, SET_FILTER } from './actionTypes'

// Defining action creators
export const createPost = (user, text) => {
  return { type: CREATE_POST, user, text }
}

export const editPost = (id, text) => {
  return { type: EDIT_POST, id, text }
}

export const setFilter = (filter) => {
  return { type: SET_FILTER, filter }
}


/*
function createPost(user, text){
  return {
    type: CREATE_POST,
    user: user,
    text: text
  }
}
*/
/*
const createPost = (user, text) => {
  return {
    type: CREATE_POST,
    user,
    text
  }
}
*/
