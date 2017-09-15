import { combineReducers } from 'redux'

import usersReducer from './users'
import postsReducer from './post'
import filterReducer from './filter'

const appReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer,
  filter: filterReducer
})

export default appReducer
