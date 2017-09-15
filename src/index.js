import { createStore } from 'redux'
import appReducer from './reducers'
import { createUser, createPost } from './actions'

let store = createStore(appReducer)

// create users
store.dispatch(createUser('dan', 'Daniel Wiz'))
store.dispatch(createUser('johnny', 'Johnny Walker'))

// create posts
store.dispatch(createPost('dan', {
  title: 'First post',
  text: 'hello world..',
  category: 'welcome'
}))

store.dispatch(createPost('johnny', {
  title: 'Second post',
  text: 'yahooo..',
  category: 'test'
}))

console.log('initial state:', store.getState())

store.subscribe(() =>
  console.log('state changed:', store.getState())
)
