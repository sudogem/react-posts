import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import FilterList from '../components/FilterList.jsx'
import { setFilter, clearFilter } from '../actions'

const mapStateToProps = (state, props) => {
  const categories = state.posts.reduce((acc, post) => {
    if (!acc.includes(post.category)) {
      console.log('acc1:',acc)
      console.log('acc2:',post.category)
      return [ ...acc, post.category ]
    }
    return acc
  }, [])
  console.log('categories ',categories)
  return { categories }
}

// longer version
// const mapDispatchToProps = (dispatch, props) => {
//   return {
//     setFilter: (category) => dispatch(setFilter(category)),
//     clearFilter: () => dispatch(clearFilter())
//   }
// }

// shorten version
// const mapDispatchToProps = (dispatch, props) =>
//   bindActionCreators({ setFilter, clearFilter }, dispatch)

// note: if using curly braces, must return bindActionCreators
const mapDispatchToProps = (dispatch, props) => {
  return bindActionCreators({ setFilter, clearFilter }, dispatch)
}

const ConnectedFilterList = connect(mapStateToProps, mapDispatchToProps)(FilterList)

export default ConnectedFilterList
