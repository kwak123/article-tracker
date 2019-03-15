import React from 'react'

import AddArticleForm from './AddArticleForm'

import api from '../../service/api'

export default class ArticleList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      articles: [],
    }
  }

  componentDidMount () {
    return api.getArticles()
      .then(articles => this.setState(() => ({ articles })))
  }

  render () {
    const { articles } = this.state

    return (
      <div>
        <ul>
          {articles.map(({ id, title, link }) => (
            <li key={id}>
              <p>{title}</p>
              <a href={link}>{link}</a>
            </li>
          ))}
        </ul>
        <AddArticleForm />
      </div>
    )
  }
}
