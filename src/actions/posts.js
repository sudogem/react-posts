// Post action creators
import { CREATE_POST, EDIT_POST, DELETE_POST } from '../actionTypes'

export const createPost = (user, post) => {
  const { title, text, category='random' } = post
  console.log('createPost post:',post);
  if (!title || !text) {
    throw new Error('Invalid post, title and text required')
  }

  return {
    type: CREATE_POST,
    post: { user, title, text, category }
  }
}

// And we could return the object directly,
// by wrapping it with ( ) brackets:
export const editPost = (id, post) => ({
    type: EDIT_POST,
    id,
    post
})

// With return statement
// export const editPost = (id, post) => {
//   return {
//     type: EDIT_POST,
//     id,
//     post
//   }
// }

export const deletePost = (id) => {
  return {
    type: DELETE_POST,
    id
  }
}

// this is wrong...
// export createPost
// export editPost
// export deletePost
