import { ObjectId } from 'mongodb';

/**
 * Blog Model - Define la estructura y validaciones de un blog
 * Responsabilidad: Solo definir la estructura de datos
 */
export class BlogModel {
    constructor(data) {
        this._id = data._id || new ObjectId();
        this.title = data.title;
        this.content = data.content;
        this.excerpt = data.excerpt || this.generateExcerpt(data.content);
        this.author = data.author;
        this.tags = data.tags || [];
        this.imageUrl = data.imageUrl || '';
        this.published = data.published || false;
        this.views = data.views || 0;
        this.createdAt = data.createdAt || new Date();
        this.updatedAt = data.updatedAt || new Date();
    }

    /**
     * Genera un excerpt automático del contenido
     */
    generateExcerpt(content) {
        if (!content) return '';
        return content.substring(0, 150) + '...';
    }

    /**
     * Convierte el modelo a un objeto plano para la BD
     */
    toDatabase() {
        return {
            _id: this._id,
            title: this.title,
            content: this.content,
            excerpt: this.excerpt,
            author: this.author,
            tags: this.tags,
            imageUrl: this.imageUrl,
            published: this.published,
            views: this.views,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        };
    }

    /**
     * Convierte el modelo a formato de respuesta API
     */
    toResponse() {
        return {
            id: this._id.toString(),
            title: this.title,
            content: this.content,
            excerpt: this.excerpt,
            author: this.author,
            tags: this.tags,
            imageUrl: this.imageUrl,
            published: this.published,
            views: this.views,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        };
    }

    /**
     * Valida que el modelo tenga datos válidos
     */
    validate() {
        const errors = [];

        if (!this.title || this.title.trim().length === 0) {
            errors.push('Title is required');
        }

        if (this.title && this.title.length > 200) {
            errors.push('Title must be less than 200 characters');
        }

        if (!this.content || this.content.trim().length === 0) {
            errors.push('Content is required');
        }

        if (!this.author || this.author.trim().length === 0) {
            errors.push('Author is required');
        }

        if (this.tags && !Array.isArray(this.tags)) {
            errors.push('Tags must be an array');
        }

        return {
            isValid: errors.length === 0,
            errors
        };
    }
}