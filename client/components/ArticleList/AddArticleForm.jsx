import React from 'react'

export default class AddArticleForm extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      title: '',
      link: '',

      // TODO: Implement tags
      tags: [],
      showErrorMessage: false,
    }

    this.onChangeTitle = this.onChangeTitle.bind(this)
    this.onChangeLink = this.onChangeLink.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onChangeTitle (event) {
    const title = event.target.value
    this.setState(() => ({ title }))
  }

  onChangeLink (event) {
    const link = event.target.value
    this.setState(() => ({ link }))
  }

  onFormSubmit (event) {
    event.preventDefault()
    this.props.handleFormSubmit(this.state)
      .then(() => this.setState({
        title: '',
        link: '',
        tags: [],
        showErrorMessage: false,
      }))
      .catch(() => this.setState(() => ({ showErrorMessage: true })))
  }

  render () {
    const {
      title,
      link,
      showErrorMessage,
    } = this.state

    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input
            type="text"
            value={title}
            onChange={this.onChangeTitle}
            placeholder="title"
          />

          <input
            type="text"
            value={link}
            onChange={this.onChangeLink}
            placeholder="link"
          />
          <button onClick={this.onFormSubmit}>Add article</button>
        </form>

        {showErrorMessage ? <p style={{ color: 'red' }}>Failed to add article</p> : null}
      </div>
    )
  }
}
