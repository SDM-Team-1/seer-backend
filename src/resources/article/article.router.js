import { Router } from 'express';
import controllers from './article.controllers';

const router = Router();

// /api/article
router.route('/').get(controllers.getMany).post(controllers.createOne);

export default router;
