import mongoose from 'mongoose';
import jsonSchema from './article.schema';

const articleSchema = new mongoose.Schema(jsonSchema, {
  collection: 'articles',
});

const Article = mongoose.model('article', articleSchema);
export default Article;
