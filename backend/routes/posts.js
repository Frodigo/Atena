import express from 'express';
import PostsController from '../controllers/posts'

const router = express.Router();
const postsController = new PostsController();

router.get('/posts', postsController.getPosts);

export default router;
