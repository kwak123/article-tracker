const express = require('express')
const { logger } = require('./util')

const db = require('./db/db')

const app = express()

// Middleware
app.use(logger)
app.use(express.json())
app.use(express.static(`${__dirname}/dist`))

const articleValidator = (req, res, next) => {
  const {
    title,
    link,
    tags,
  } = req.body
  const fieldsToValidate = [title, link, tags]
  // While acc is true, check to see field is truthy, otherwise, stay false
  const validArticle = fieldsToValidate.reduce((acc, el) => acc ? !!el : acc, true)
  if (validArticle) {
    return next()
  }
  else {
    return res.status(400).send('Invalid article')
  }
}

// Routes
app.get('/api/articles', (req, res) => db.getArticles()
  .then(articles => res.send(articles)))

app.post('/api/articles', articleValidator, (req, res) => {
  const article = req.body
  db.addArticle(article)
  return res.sendStatus(200)
})

let port = process.env.port || 3000
app.listen(port, () => console.log(`Now listening on ${port}`))
