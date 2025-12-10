import { ProjectService } from '../services/project.service.js';
import { asyncHandler } from '../utils/errors.js';

/**
 * Project Controller - Solo orquesta requests y responses
 * Responsabilidad: Recibir request, llamar service, retornar response
 */

// Instancia del servicio
const projectService = new ProjectService();

/**
 * GET /api/projects/all
 * Obtiene todos los proyectos
 */
export const getAllProjects = asyncHandler(async (req, res) => {
    const projects = await projectService.getAllProjects();

    res.status(200).json({
        status: 'success',
        results: projects.length,
        data: projects
    });
});

/**
 * GET /api/projects/:id
 * Obtiene un proyecto por ID
 */
export const getProjectById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const project = await projectService.getProjectById(id);

    res.status(200).json({
        status: 'success',
        data: project
    });
});

/**
 * POST /api/projects
 * Crea un nuevo proyecto
 */
export const createProject = asyncHandler(async (req, res) => {
    const projectData = req.body;
    const newProject = await projectService.createProject(projectData);

    res.status(201).json({
        status: 'success',
        message: 'Project created successfully',
        data: newProject
    });
});

/**
 * PUT /api/projects/:id
 * Actualiza un proyecto existente
 */
export const updateProject = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const projectData = req.body;
    const updatedProject = await projectService.updateProject(id, projectData);

    res.status(200).json({
        status: 'success',
        message: 'Project updated successfully',
        data: updatedProject
    });
});

/**
 * DELETE /api/projects/:id
 * Elimina un proyecto
 */
export const deleteProject = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const result = await projectService.deleteProject(id);

    res.status(200).json({
        status: 'success',
        message: result.message
    });
});

/**
 * GET /api/projects/featured
 * Obtiene proyectos destacados
 */
export const getFeatured = asyncHandler(async (req, res) => {
    const projects = await projectService.getFeaturedProjects();

    res.status(200).json({
        status: 'success',
        results: projects.length,
        data: projects
    });
});

/**
 * PATCH /api/projects/:id/featured
 * Toggle featured status
 */
export const toggleFeatured = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const project = await projectService.toggleFeatured(id);

    res.status(200).json({
        status: 'success',
        message: 'Featured status toggled',
        data: project
    });
});