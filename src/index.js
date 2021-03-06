import { createStore } from 'redux'
import React from 'react'
import ReactDOM from 'react-dom'

import appReducer from './reducers'
import { createUser, createPost } from './actions'
import App from './components/App.jsx'

let store = createStore(appReducer)

// object
var obj = {
  "posts": [
    {
      "user": "dan",
      "text": "test"
    }
  ],
  "filter": "all"
};

// create users
store.dispatch(createUser('dan', 'Daniel Bugl'))
store.dispatch(createUser('max', 'Max Mustermann'))
store.dispatch(createUser('rena', 'Rena Elena'))
store.dispatch(createUser('john', 'JOhn Wick'))

// create posts
store.dispatch(createPost('dan', {
  title: 'Dan post',
  text: 'Hello world! This is the first blog post.',
  category: 'welcome',
}))
store.dispatch(createPost('max', {
  title: 'Max post',
  text: 'This is another test blog post.',
  category: 'test',
}))
store.dispatch(createPost('rena', {
  title: 'Rena post',
  text: 'This is another test blog post.',
  category: 'test',
}))
store.dispatch(createPost('john', {
  title: 'Who is john',
  text: 'This is another test blog post.',
  category: 'uncategorized',
}))

console.log('initial state:', store.getState())
store.subscribe(() =>
  console.log('state changed:', store.getState())
)

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
)
