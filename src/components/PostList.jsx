import React from 'react'
import Post from './Post.jsx'

const PostList = ({ posts }) =>
<ul>
  {posts.map((p, i) =>
    <li key={i.toString()}>
      <Post {...p} />
    </li>

  )}
</ul>

export default PostList
