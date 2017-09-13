import React from 'react'
import { render } from 'react-dom';

import Post from './components/Post.jsx'

render(
  <Post user="dan" text="hello world!" />,
  document.getElementById('root')
)
