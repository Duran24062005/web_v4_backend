import { BlogRepository } from '../repositories/blog.repository.js';
import { BlogModel } from '../models/blog.model.js';
import { AppError } from '../utils/errors.js';

/**
 * Blog Service - Contiene TODA la lógica de negocio
 * Responsabilidad: Orquestar operaciones, validar reglas de negocio
 */
export class BlogService {
    constructor() {
        this.repository = new BlogRepository();
    }

    /**
     * Obtiene todos los blogs
     */
    async getAllBlogs() {
        const blogs = await this.repository.findAll();
        return blogs.map(blog => new BlogModel(blog).toResponse());
    }

    /**
     * Obtiene un blog por ID
     */
    async getBlogById(id) {
        // Validar formato de ID
        if (!this.isValidObjectId(id)) {
            throw new AppError('Invalid blog ID format', 400);
        }

        const blog = await this.repository.findById(id);

        if (!blog) {
            throw new AppError('Blog not found', 404);
        }

        // Incrementar vistas
        await this.repository.incrementViews(id);

        return new BlogModel(blog).toResponse();
    }

    /**
     * Obtiene solo blogs publicados
     */
    async getPublishedBlogs() {
        const blogs = await this.repository.findPublished();
        return blogs.map(blog => new BlogModel(blog).toResponse());
    }

    /**
     * Busca blogs por tags
     */
    async getBlogsByTags(tags) {
        if (!Array.isArray(tags) || tags.length === 0) {
            throw new AppError('Tags must be a non-empty array', 400);
        }

        const blogs = await this.repository.findByTags(tags);
        return blogs.map(blog => new BlogModel(blog).toResponse());
    }

    /**
     * Crea un nuevo blog
     */
    async createBlog(blogData) {
        // Crear instancia del modelo
        const blogModel = new BlogModel(blogData);

        // Validar el modelo
        const validation = blogModel.validate();
        if (!validation.isValid) {
            throw new AppError(`Validation failed: ${validation.errors.join(', ')}`, 400);
        }

        // Verificar que no exista un blog con el mismo título
        const exists = await this.repository.existsByTitle(blogModel.title);
        if (exists) {
            throw new AppError('A blog with this title already exists', 409);
        }

        // Guardar en la base de datos
        const savedBlog = await this.repository.create(blogModel.toDatabase());

        return new BlogModel(savedBlog).toResponse();
    }

    /**
     * Actualiza un blog existente
     */
    async updateBlog(id, blogData) {
        // Validar formato de ID
        if (!this.isValidObjectId(id)) {
            throw new AppError('Invalid blog ID format', 400);
        }

        // Verificar que el blog existe
        const existingBlog = await this.repository.findById(id);
        if (!existingBlog) {
            throw new AppError('Blog not found', 404);
        }

        // Crear modelo con datos actualizados
        const updatedData = { ...existingBlog, ...blogData };
        const blogModel = new BlogModel(updatedData);

        // Validar el modelo actualizado
        const validation = blogModel.validate();
        if (!validation.isValid) {
            throw new AppError(`Validation failed: ${validation.errors.join(', ')}`, 400);
        }

        // Si se cambió el título, verificar que no exista otro con ese título
        if (blogData.title && blogData.title !== existingBlog.title) {
            const titleExists = await this.repository.existsByTitle(blogData.title, id);
            if (titleExists) {
                throw new AppError('A blog with this title already exists', 409);
            }
        }

        // Actualizar en la base de datos
        const updatedBlog = await this.repository.update(id, blogData);

        return new BlogModel(updatedBlog).toResponse();
    }

    /**
     * Elimina un blog
     */
    async deleteBlog(id) {
        // Validar formato de ID
        if (!this.isValidObjectId(id)) {
            throw new AppError('Invalid blog ID format', 400);
        }

        // Verificar que el blog existe
        const blog = await this.repository.findById(id);
        if (!blog) {
            throw new AppError('Blog not found', 404);
        }

        // Eliminar
        const deleted = await this.repository.delete(id);

        if (!deleted) {
            throw new AppError('Failed to delete blog', 500);
        }

        return { message: 'Blog deleted successfully' };
    }

    /**
     * Valida si un string es un ObjectId válido
     */
    isValidObjectId(id) {
        return /^[0-9a-fA-F]{24}$/.test(id);
    }
}