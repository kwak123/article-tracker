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

const getArticles = () => tempMockArticles

const addArticle = article => tempMockArticles.push(article)

module.exports = {
  getArticles,
  addArticle,
}
