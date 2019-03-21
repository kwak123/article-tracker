import React from 'react'

import ArticleList from './ArticleList/ArticleList'

import '~/client/assets/main.scss'
import '~/client/assets/app.scss'

class Main extends React.Component {
  render () {
    return (
      <div className="main__container">
        <h1 className="main__header">Article Tracker</h1>
        <ArticleList />
      </div>
    )
  }
}

export default Main
