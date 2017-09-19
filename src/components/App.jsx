import React from 'react'
import ConnectedPostList from '../containers/ConnectedPostList.jsx'
import ConnectedFilterList from '../containers/ConnectedFilterList.jsx'
import { Provider } from 'react-redux'

// longer version
// const App = ({ store }) =>
//   <div>
//     <h1>React + Redux blog app</h1>
//     <div><ConnectedFilterList store={store} /></div>
//     <div><ConnectedPostList store={store} /></div>
//   </div>

// recommended version
const App = ({ store }) =>
  <Provider store={store}>
    <div>
      <h1>Simple React + Redux app</h1>
      <div><ConnectedFilterList /></div>
      <div><ConnectedPostList /></div>
    </div>
  </Provider>

export default App
