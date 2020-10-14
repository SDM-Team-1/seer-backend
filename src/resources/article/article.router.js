import { Router } from 'express';
import controllers from './article.controllers';

const router = Router();

// /api/article
router
  .route('/')
  .get(controllers.getArticle)
  .post(controllers.createArticleEntry);

export default router;
