/**
 * Article model
 * Location : models/article-model.js
 */
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let articleSchema = new Schema({
  title: String,
  content: String
});

let Article = mongoose.model('article', articleSchema);

module.exports = Article;