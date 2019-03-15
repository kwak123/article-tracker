const express = require('express')
const { logger } = require('./util')

const db = require('./db/db')

const app = express()

// Middleware
app.use(logger)
app.use(express.json())
app.use(express.static(`${__dirname}/dist`))

// Routes
app.get('/api/articles', (req, res) => res.send(db.getArticles()))

app.post('/api/articles', (req, res) => {
  const article = req.body
  db.addArticle(article)
  return res.sendStatus(200)
})

let port = process.env.port || 3000
app.listen(port, () => console.log(`Now listening on ${port}`))
