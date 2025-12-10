import { ObjectId } from 'mongodb';

/**
 * Project Model - Define la estructura y validaciones de un proyecto
 * Responsabilidad: Solo definir la estructura de datos
 */
export class ProjectModel {
    constructor(data) {
        this._id = data._id || new ObjectId();
        this.title = data.title;
        this.description = data.description;
        this.technologies = data.technologies || [];
        this.imageUrl = data.imageUrl || '';
        this.demoUrl = data.demoUrl || '';
        this.repoUrl = data.repoUrl || '';
        this.featured = data.featured || false;
        this.createdAt = data.createdAt || new Date();
        this.updatedAt = data.updatedAt || new Date();
    }

    /**
     * Convierte el modelo a un objeto plano para la BD
     */
    toDatabase() {
        return {
            _id: this._id,
            title: this.title,
            description: this.description,
            technologies: this.technologies,
            imageUrl: this.imageUrl,
            demoUrl: this.demoUrl,
            repoUrl: this.repoUrl,
            featured: this.featured,
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
            description: this.description,
            technologies: this.technologies,
            imageUrl: this.imageUrl,
            demoUrl: this.demoUrl,
            repoUrl: this.repoUrl,
            featured: this.featured,
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

        if (!this.description || this.description.trim().length === 0) {
            errors.push('Description is required');
        }

        if (this.description && this.description.length < 50) {
            errors.push('Description must be at least 50 characters');
        }

        if (this.technologies && !Array.isArray(this.technologies)) {
            errors.push('Technologies must be an array');
        }

        if (this.technologies && this.technologies.length === 0) {
            errors.push('At least one technology is required');
        }

        return {
            isValid: errors.length === 0,
            errors
        };
    }
}