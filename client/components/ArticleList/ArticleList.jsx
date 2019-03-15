import React from 'react'

import AddArticleForm from './AddArticleForm'

import api from '../../service/api'

export default class ArticleList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      articles: [],
    }
    this.getArticles = this.getArticles.bind(this)
    this.addArticle = this.addArticle.bind(this)
  }

  componentDidMount () {
    return this.getArticles()
  }

  getArticles (article) {
    return api.getArticles()
      .then(articles => this.setState(() => ({ articles })))
  }

  addArticle (article) {
    return api.addArticle(article)
      .then(this.getArticles)
  }

  render () {
    const { articles } = this.state

    return (
      <div className="article-list__container">
        <h2 className="article-list__header">Articles</h2>
        <ul>
          {articles.map(({ _id, title, link }) => (
            <li key={_id}>
              <p>{title}</p>
              <a href={link}>{link}</a>
            </li>
          ))}
        </ul>
        <AddArticleForm
          handleFormSubmit={this.addArticle}
        />
      </div>
    )
  }
}
