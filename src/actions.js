import { CREATE_POST } from './actionTypes'

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

// action creator
export const createPost = (user, text) => {
  return { type: CREATE_POST, user, text }
}
