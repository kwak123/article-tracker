import React from 'react'

import ArticleList from './ArticleList/ArticleList'

class Main extends React.Component {
  render () {
    return (
      <div>
        <h1> Welcome! </h1>
        <ArticleList />
      </div>
    )
  }
}

export default Main
