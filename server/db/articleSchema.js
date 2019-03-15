const Schema = require('mongoose').Schema

// eslint-disable-next-line no-unused-vars
const articleSchema = new Schema({
  title: String,
  link: String,
  tags: [String],
})

module.exports = articleSchema
