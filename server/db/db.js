const mongoose = require('mongoose')
const articleSchema = require('./articleSchema')
const Article = mongoose.model('Article', articleSchema)

mongoose.connect('mongodb://localhost/myapp')
  .then(() => console.log('connected to mongodb'))
  .catch(() => console.log('failed to connect db'))

const tempMockArticles = [
  {
    // This is liable to change due to the way Mongo handles ids
    id: 1,
    title: 'Temp article',
    link: 'www.google.com',
    tags: [
      'React',
    ],
  },
]

const seedArticleData = {
  title: 'Temp article',
  link: 'www.google.com',
  tags: [
    'React',
  ],
}

const seedArticle = new Article(seedArticleData)
Article.deleteMany()
  .then(() => seedArticle.save())
  .then(() => console.log(Article.find({})))

const getArticles = () => tempMockArticles

let nextId = 2;

const addArticle = (article) => {
  tempMockArticles.push({
    id: nextId,
    ...article,
  })

  nextId += 1
}

module.exports = {
  getArticles,
  addArticle,
}
