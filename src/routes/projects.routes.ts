import { Router } from 'express';
import {
  getAllProjects,
  getFeaturedProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
  getProjectsByTechnology
} from '../controllers/projects.controller.js';

const projectRouter = Router();

// GET routes
projectRouter.get('/all', getAllProjects);
projectRouter.get('/featured', getFeaturedProjects);
projectRouter.get('/search', getProjectsByTechnology);
projectRouter.get('/:id', getProjectById);

// POST routes
projectRouter.post('/', createProject);

// PUT routes
projectRouter.put('/:id', updateProject);

// DELETE routes
projectRouter.delete('/:id', deleteProject);

export default projectRouter;