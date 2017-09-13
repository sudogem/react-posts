import { CREATE_POST, EDIT_POST, SET_FILTER } from './actionTypes'
import { combineReducers } from 'redux'

export function postsReducer (state = [], action) {
  switch(action.type) {
    case CREATE_POST: {
      // const type = action.type // ES5
      const { type, ...post } = action // ES2015
       // merges two arrays same as using .concat
      // return state.concat([ post ])
      return [ ...state, post ]
    }

    case EDIT_POST: {
      const { type, id, ...newPost } = action
      return state.map((oldPost, index) => 
        action.id === index ? { ...oldPost, ...newPost } : oldPost
        )
    }

    default:
      return state
  }
}

function filterReducer (state = 'all', action) {
  if (action.type === SET_FILTER) {
    return action.filter
  } else {
    return state
  }
}

const appReducer = combineReducers({
  posts: postsReducer,
  filter: filterReducer
})
// or manual way like this
// function appReducer (state = {}, action) {
//   return {
//     posts: postsReducer(state.posts, action),
//     filter: filterReducer(state.filter, action)
//   }
// }

export default appReducer