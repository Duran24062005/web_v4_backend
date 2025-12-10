import { BlogService } from '../services/blog.service.js';
import { asyncHandler } from '../utils/errors.js';

/**
 * Blog Controller - Solo orquesta requests y responses
 * Responsabilidad: Recibir request, llamar service, retornar response
 */

// Instancia del servicio
const blogService = new BlogService();

/**
 * GET /api/blogs/all
 * Obtiene todos los blogs
 */
export const Blogs = asyncHandler(async (req, res) => {
    const blogs = await blogService.getAllBlogs();

    res.status(200).json({
        status: 'success',
        results: blogs.length,
        data: blogs
    });
});

/**
 * GET /api/blogs/:id
 * Obtiene un blog por ID
 */
export const filterById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const blog = await blogService.getBlogById(id);

    res.status(200).json({
        status: 'success',
        data: blog
    });
});

/**
 * POST /api/blogs
 * Crea un nuevo blog
 */
export const createNewBlog = asyncHandler(async (req, res) => {
    const blogData = req.body;
    const newBlog = await blogService.createBlog(blogData);

    res.status(201).json({
        status: 'success',
        message: 'Blog created successfully',
        data: newBlog
    });
});

/**
 * PUT /api/blogs/:id
 * Actualiza un blog existente
 */
export const updatedBlog = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const blogData = req.body;
    const updatedBlog = await blogService.updateBlog(id, blogData);

    res.status(200).json({
        status: 'success',
        message: 'Blog updated successfully',
        data: updatedBlog
    });
});

/**
 * DELETE /api/blogs/:id
 * Elimina un blog
 */
export const deleteBlog = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const result = await blogService.deleteBlog(id);

    res.status(200).json({
        status: 'success',
        message: result.message
    });
});

/**
 * GET /api/blogs/published
 * Obtiene solo blogs publicados
 */
export const getPublished = asyncHandler(async (req, res) => {
    const blogs = await blogService.getPublishedBlogs();

    res.status(200).json({
        status: 'success',
        results: blogs.length,
        data: blogs
    });
});