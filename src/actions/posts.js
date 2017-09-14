// Post action creators
import { CREATE_POST, EDIT_POST, DELETE_POST } from '../actionTypes'

const createPost = (user, post) => {
  const { title, text, category='random' } = post
  if (!title || !text) {
    throw new Error('Invalid post, title and text required')
  }

  return {
    type: CREATE_POST,
    post: { user, title, text, category }
  }
}

const editPost = (id, post) => {
  return {
    type: EDIT_POST,
    id,
    post
  }
}

const deletePost = (id) => {
  return {
    type: DELETE_POST,
    id
  }
}

export createPost
export editPost
export deletePost
