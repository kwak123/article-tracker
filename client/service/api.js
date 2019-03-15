import axios from 'axios'

const api = {
  getArticles: () => axios
    .get('/api/articles')
    .then(res => res.data),

  addArticle: article => axios
    .post('/api/articles', article),
}

export default api
