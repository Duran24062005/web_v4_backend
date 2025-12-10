import express from "express";
import {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
  getFeatured,
  toggleFeatured
} from "../controllers/projects.controller.js";

const projects_router = express.Router();

// Obtener todos los proyectos
projects_router.get("/all", getAllProjects);

// Obtener proyectos destacados
projects_router.get("/featured", getFeatured);

// Obtener proyecto por ID
projects_router.get("/:id", getProjectById);

// Crear nuevo proyecto
projects_router.post("/", createProject);

// Actualizar proyecto
projects_router.put("/:id", updateProject);

// Toggle featured status
projects_router.patch("/:id/featured", toggleFeatured);

// Eliminar proyecto
projects_router.delete("/:id", deleteProject);

export default projects_router;