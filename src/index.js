import React from 'react'
import { render } from 'react-dom';
import { createPost } from './actions'
import appReducer from './reducers'
import ConnectedPostList from './containers/ConnectedPostList.jsx'
import { createStore } from 'redux'

let store = createStore(appReducer)
store.dispatch(createPost('dan', 'helloworld') )
setTimeout(() => store.dispatch(createPost('des', 'hi..')), 1000)
//
// const postData = [
//   { user: 'dan', text: 'hello world!' },
//   { user: 'mik', text: 'ellow!' },
//   { user: 'koy', text: 'hi!' }
// ]

// render(
//   <PostList posts={postData} />,
//   document.getElementById('root')
// )

render(
  <ConnectedPostList store={store} />,
  document.getElementById('root')
)
