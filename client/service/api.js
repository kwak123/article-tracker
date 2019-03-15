import axios from 'axios'

const api = {
  getArticles: () => axios
    .get('/api/articles')
    .then(res => res.data),
}

export default api
