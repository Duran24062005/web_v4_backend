import { Router } from 'express';
import {
  getAllBlogs,
  getPublishedBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
  searchBlogs
} from '../controllers/blogs.controller.js';

const blogRouter = Router();

// GET routes
blogRouter.get('/all', getAllBlogs);
blogRouter.get('/published', getPublishedBlogs);
blogRouter.get('/search', searchBlogs);
blogRouter.get('/:id', getBlogById);

// POST routes
blogRouter.post('/', createBlog);

// PUT routes
blogRouter.put('/:id', updateBlog);

// DELETE routes
blogRouter.delete('/:id', deleteBlog);

export default blogRouter;