import { connect } from 'react-redux'
import PostList from '../components/PostList.jsx'

/** if without filter **/
const mapStateToProps2 = (state, props) => {
  const filteredPosts = state.posts
  console.log('filteredPosts',filteredPosts)
  return {
    posts: filteredPosts
  }
}

/** with filter **/
const mapStateToProps = (state, props) => {
  const filteredPosts = state.filter ? state.posts.filter((post) =>
    post.category === state.filter) : state.posts

    // if (state.filter) {
    //   console.log('aa')
    //   filteredPosts = state.posts.filter((post) =>
    //     post.category == state.filter)
    // } else {
    //   filteredPosts = state.posts
    //   console.log('bb')
    // }



  return {
    posts: filteredPosts.map((post) => {
      const { user, ...rest } = post
      const userObj = state.users.find(({ username }) =>
        user === username
      )
      return {
        user: userObj,
        ...rest
      }
    })
  }
}

const ConnectedPostList = connect(mapStateToProps)(PostList)

export default ConnectedPostList
