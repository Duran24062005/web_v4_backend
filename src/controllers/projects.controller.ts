import { Request, Response } from 'express';
import { ProjectService } from '../services/project.service.js';
import { CreateProjectDTO, UpdateProjectDTO, ApiResponse, Project } from '../types/models.js';

const projectService = new ProjectService();

export const getAllProjects = async (_req: Request, res: Response): Promise<void> => {
  try {
    const projects = await projectService.getAllProjects();
    const response: ApiResponse<Project[]> = {
      success: true,
      data: projects
    };
    res.json(response);
  } catch (error) {
    const response: ApiResponse<null> = {
      success: false,
      error: 'Error al obtener los proyectos'
    };
    res.status(500).json(response);
  }
};

export const getFeaturedProjects = async (_req: Request, res: Response): Promise<void> => {
  try {
    const projects = await projectService.getFeaturedProjects();
    const response: ApiResponse<Project[]> = {
      success: true,
      data: projects
    };
    res.json(response);
  } catch (error) {
    const response: ApiResponse<null> = {
      success: false,
      error: 'Error al obtener los proyectos destacados'
    };
    res.status(500).json(response);
  }
};

export const getProjectById = async (req: Request, res: Response): Promise<void> => {
  try {
    const project = await projectService.getProjectById(req.params.id);
    
    if (!project) {
      const response: ApiResponse<null> = {
        success: false,
        message: 'Proyecto no encontrado'
      };
      res.status(404).json(response);
      return;
    }

    const response: ApiResponse<Project> = {
      success: true,
      data: project
    };
    res.json(response);
  } catch (error) {
    const response: ApiResponse<null> = {
      success: false,
      error: 'Error al obtener el proyecto'
    };
    res.status(500).json(response);
  }
};

export const createProject = async (req: Request, res: Response): Promise<void> => {
  try {
    const projectData: CreateProjectDTO = req.body;
    const newProject = await projectService.createProject(projectData);
    
    const response: ApiResponse<Project> = {
      success: true,
      data: newProject,
      message: 'Proyecto creado exitosamente'
    };
    res.status(201).json(response);
  } catch (error) {
    const response: ApiResponse<null> = {
      success: false,
      error: 'Error al crear el proyecto'
    };
    res.status(500).json(response);
  }
};

export const updateProject = async (req: Request, res: Response): Promise<void> => {
  try {
    const updateData: UpdateProjectDTO = req.body;
    const updatedProject = await projectService.updateProject(req.params.id, updateData);
    
    if (!updatedProject) {
      const response: ApiResponse<null> = {
        success: false,
        message: 'Proyecto no encontrado'
      };
      res.status(404).json(response);
      return;
    }

    const response: ApiResponse<Project> = {
      success: true,
      data: updatedProject,
      message: 'Proyecto actualizado exitosamente'
    };
    res.json(response);
  } catch (error) {
    const response: ApiResponse<null> = {
      success: false,
      error: 'Error al actualizar el proyecto'
    };
    res.status(500).json(response);
  }
};

export const deleteProject = async (req: Request, res: Response): Promise<void> => {
  try {
    const deleted = await projectService.deleteProject(req.params.id);
    
    if (!deleted) {
      const response: ApiResponse<null> = {
        success: false,
        message: 'Proyecto no encontrado'
      };
      res.status(404).json(response);
      return;
    }

    const response: ApiResponse<null> = {
      success: true,
      message: 'Proyecto eliminado exitosamente'
    };
    res.json(response);
  } catch (error) {
    const response: ApiResponse<null> = {
      success: false,
      error: 'Error al eliminar el proyecto'
    };
    res.status(500).json(response);
  }
};

export const getProjectsByTechnology = async (req: Request, res: Response): Promise<void> => {
  try {
    const tech = req.query.tech as string;
    
    if (!tech) {
      const response: ApiResponse<null> = {
        success: false,
        message: 'Parámetro de tecnología requerido'
      };
      res.status(400).json(response);
      return;
    }

    const projects = await projectService.getProjectsByTechnology(tech);
    const response: ApiResponse<Project[]> = {
      success: true,
      data: projects
    };
    res.json(response);
  } catch (error) {
    const response: ApiResponse<null> = {
      success: false,
      error: 'Error al buscar proyectos'
    };
    res.status(500).json(response);
  }
};