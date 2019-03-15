const mongoose = require('mongoose')
const articleSchema = require('./articleSchema')
const Article = mongoose.model('Article', articleSchema)

mongoose.connect('mongodb://localhost/myapp')
  .then(() => console.log('connected to mongodb'))
  .catch(() => console.log('failed to connect db'))

const seedArticleData = {
  title: 'Temp article',
  link: 'www.google.com',
  tags: [
    'React',
  ],
}

const seedArticle = new Article(seedArticleData)

// Clear then reseeed
Article.deleteMany()
  .then(() => seedArticle.save())
  .then(() => Article.find({}))
  .then(result => console.log(result))

const getArticles = () => Article.find({})

const addArticle = (article) => {
  const newArticle = new Article(article)
  return newArticle.save()
}

module.exports = {
  getArticles,
  addArticle,
}
