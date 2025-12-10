import { ProjectRepository } from '../repositories/project.repository.js';
import { ProjectModel } from '../models/project.model.js';
import { AppError } from '../utils/errors.js';

/**
 * Project Service - Contiene TODA la lógica de negocio
 * Responsabilidad: Orquestar operaciones, validar reglas de negocio
 */
export class ProjectService {
    constructor() {
        this.repository = new ProjectRepository();
    }

    /**
     * Obtiene todos los proyectos
     */
    async getAllProjects() {
        const projects = await this.repository.findAll();
        return projects.map(project => new ProjectModel(project).toResponse());
    }

    /**
     * Obtiene un proyecto por ID
     */
    async getProjectById(id) {
        // Validar formato de ID
        if (!this.isValidObjectId(id)) {
            throw new AppError('Invalid project ID format', 400);
        }

        const project = await this.repository.findById(id);

        if (!project) {
            throw new AppError('Project not found', 404);
        }

        return new ProjectModel(project).toResponse();
    }

    /**
     * Obtiene proyectos destacados
     */
    async getFeaturedProjects() {
        const projects = await this.repository.findFeatured();
        return projects.map(project => new ProjectModel(project).toResponse());
    }

    /**
     * Busca proyectos por tecnología
     */
    async getProjectsByTechnology(technology) {
        if (!technology || technology.trim().length === 0) {
            throw new AppError('Technology parameter is required', 400);
        }

        const projects = await this.repository.findByTechnology(technology);
        return projects.map(project => new ProjectModel(project).toResponse());
    }

    /**
     * Crea un nuevo proyecto
     */
    async createProject(projectData) {
        // Crear instancia del modelo
        const projectModel = new ProjectModel(projectData);

        // Validar el modelo
        const validation = projectModel.validate();
        if (!validation.isValid) {
            throw new AppError(`Validation failed: ${validation.errors.join(', ')}`, 400);
        }

        // Verificar que no exista un proyecto con el mismo título
        const exists = await this.repository.existsByTitle(projectModel.title);
        if (exists) {
            throw new AppError('A project with this title already exists', 409);
        }

        // Guardar en la base de datos
        const savedProject = await this.repository.create(projectModel.toDatabase());

        return new ProjectModel(savedProject).toResponse();
    }

    /**
     * Actualiza un proyecto existente
     */
    async updateProject(id, projectData) {
        // Validar formato de ID
        if (!this.isValidObjectId(id)) {
            throw new AppError('Invalid project ID format', 400);
        }

        // Verificar que el proyecto existe
        const existingProject = await this.repository.findById(id);
        if (!existingProject) {
            throw new AppError('Project not found', 404);
        }

        // Crear modelo con datos actualizados
        const updatedData = { ...existingProject, ...projectData };
        const projectModel = new ProjectModel(updatedData);

        // Validar el modelo actualizado
        const validation = projectModel.validate();
        if (!validation.isValid) {
            throw new AppError(`Validation failed: ${validation.errors.join(', ')}`, 400);
        }

        // Si se cambió el título, verificar que no exista otro con ese título
        if (projectData.title && projectData.title !== existingProject.title) {
            const titleExists = await this.repository.existsByTitle(projectData.title, id);
            if (titleExists) {
                throw new AppError('A project with this title already exists', 409);
            }
        }

        // Actualizar en la base de datos
        const updatedProject = await this.repository.update(id, projectData);

        return new ProjectModel(updatedProject).toResponse();
    }

    /**
     * Elimina un proyecto
     */
    async deleteProject(id) {
        // Validar formato de ID
        if (!this.isValidObjectId(id)) {
            throw new AppError('Invalid project ID format', 400);
        }

        // Verificar que el proyecto existe
        const project = await this.repository.findById(id);
        if (!project) {
            throw new AppError('Project not found', 404);
        }

        // Eliminar
        const deleted = await this.repository.delete(id);

        if (!deleted) {
            throw new AppError('Failed to delete project', 500);
        }

        return { message: 'Project deleted successfully' };
    }

    /**
     * Marca/desmarca un proyecto como destacado
     */
    async toggleFeatured(id) {
        // Validar formato de ID
        if (!this.isValidObjectId(id)) {
            throw new AppError('Invalid project ID format', 400);
        }

        const project = await this.repository.toggleFeatured(id);

        if (!project) {
            throw new AppError('Project not found', 404);
        }

        return new ProjectModel(project).toResponse();
    }

    /**
     * Valida si un string es un ObjectId válido
     */
    isValidObjectId(id) {
        return /^[0-9a-fA-F]{24}$/.test(id);
    }
}