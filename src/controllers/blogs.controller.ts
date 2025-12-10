import { Request, Response } from 'express';
import { BlogService } from '../services/blog.service';
import { CreateBlogDTO, UpdateBlogDTO, ApiResponse, Blog } from '../types/models';

const blogService = new BlogService();

export const getAllBlogs = async (_req: Request, res: Response): Promise<void> => {
    try {
        const blogs = await blogService.getAllBlogs();
        const response: ApiResponse<Blog[]> = {
            success: true,
            data: blogs
        };
        res.json(response);
    } catch (error) {
        const response: ApiResponse<null> = {
            success: false,
            error: 'Error al obtener los blogs'
        };
        res.status(500).json(response);
    }
};

export const getPublishedBlogs = async (_req: Request, res: Response): Promise<void> => {
    try {
        const blogs = await blogService.getPublishedBlogs();
        const response: ApiResponse<Blog[]> = {
            success: true,
            data: blogs
        };
        res.json(response);
    } catch (error) {
        const response: ApiResponse<null> = {
            success: false,
            error: 'Error al obtener los blogs publicados'
        };
        res.status(500).json(response);
    }
};

export const getBlogById = async (req: Request, res: Response): Promise<void> => {
    try {
        const blog = await blogService.getBlogById(req.params.id);

        if (!blog) {
            const response: ApiResponse<null> = {
                success: false,
                message: 'Blog no encontrado'
            };
            res.status(404).json(response);
            return;
        }

        const response: ApiResponse<Blog> = {
            success: true,
            data: blog
        };
        res.json(response);
    } catch (error) {
        const response: ApiResponse<null> = {
            success: false,
            error: 'Error al obtener el blog'
        };
        res.status(500).json(response);
    }
};

export const createBlog = async (req: Request, res: Response): Promise<void> => {
    try {
        const blogData: CreateBlogDTO = req.body;
        const newBlog = await blogService.createBlog(blogData);

        const response: ApiResponse<Blog> = {
            success: true,
            data: newBlog,
            message: 'Blog creado exitosamente'
        };
        res.status(201).json(response);
    } catch (error) {
        const response: ApiResponse<null> = {
            success: false,
            error: 'Error al crear el blog'
        };
        res.status(500).json(response);
    }
};

export const updateBlog = async (req: Request, res: Response): Promise<void> => {
    try {
        const updateData: UpdateBlogDTO = req.body;
        const updatedBlog = await blogService.updateBlog(req.params.id, updateData);

        if (!updatedBlog) {
            const response: ApiResponse<null> = {
                success: false,
                message: 'Blog no encontrado'
            };
            res.status(404).json(response);
            return;
        }

        const response: ApiResponse<Blog> = {
            success: true,
            data: updatedBlog,
            message: 'Blog actualizado exitosamente'
        };
        res.json(response);
    } catch (error) {
        const response: ApiResponse<null> = {
            success: false,
            error: 'Error al actualizar el blog'
        };
        res.status(500).json(response);
    }
};

export const deleteBlog = async (req: Request, res: Response): Promise<void> => {
    try {
        const deleted = await blogService.deleteBlog(req.params.id);

        if (!deleted) {
            const response: ApiResponse<null> = {
                success: false,
                message: 'Blog no encontrado'
            };
            res.status(404).json(response);
            return;
        }

        const response: ApiResponse<null> = {
            success: true,
            message: 'Blog eliminado exitosamente'
        };
        res.json(response);
    } catch (error) {
        const response: ApiResponse<null> = {
            success: false,
            error: 'Error al eliminar el blog'
        };
        res.status(500).json(response);
    }
};

export const searchBlogs = async (req: Request, res: Response): Promise<void> => {
    try {
        const query = req.query.q as string;

        if (!query) {
            const response: ApiResponse<null> = {
                success: false,
                message: 'Parámetro de búsqueda requerido'
            };
            res.status(400).json(response);
            return;
        }

        const blogs = await blogService.searchBlogs(query);
        const response: ApiResponse<Blog[]> = {
            success: true,
            data: blogs
        };
        res.json(response);
    } catch (error) {
        const response: ApiResponse<null> = {
            success: false,
            error: 'Error al buscar blogs'
        };
        res.status(500).json(response);
    }
};