import { ObjectId } from 'mongodb';
import connectDB from '../config/db/conection.js';

/**
 * Project Repository - Maneja SOLO las operaciones de base de datos
 * Responsabilidad: Acceso a datos, nada de lógica de negocio
 */
export class ProjectRepository {
    constructor() {
        this.collectionName = 'projects';
    }

    /**
     * Obtiene la colección de proyectos
     */
    async getCollection() {
        const db = await connectDB();
        return db.collection(this.collectionName);
    }

    /**
     * Obtiene todos los proyectos
     */
    async findAll() {
        const collection = await this.getCollection();
        return await collection.find({}).toArray();
    }

    /**
     * Obtiene un proyecto por ID
     */
    async findById(id) {
        const collection = await this.getCollection();
        return await collection.findOne({ _id: new ObjectId(id) });
    }

    /**
     * Obtiene proyectos destacados
     */
    async findFeatured() {
        const collection = await this.getCollection();
        return await collection.find({ featured: true }).toArray();
    }

    /**
     * Busca proyectos por tecnología
     */
    async findByTechnology(technology) {
        const collection = await this.getCollection();
        return await collection.find({
            technologies: { $in: [technology] }
        }).toArray();
    }

    /**
     * Crea un nuevo proyecto
     */
    async create(projectData) {
        const collection = await this.getCollection();
        const result = await collection.insertOne(projectData);
        return await this.findById(result.insertedId);
    }

    /**
     * Actualiza un proyecto
     */
    async update(id, projectData) {
        const collection = await this.getCollection();

        // Actualiza el campo updatedAt
        projectData.updatedAt = new Date();

        await collection.updateOne(
            { _id: new ObjectId(id) },
            { $set: projectData }
        );

        return await this.findById(id);
    }

    /**
     * Elimina un proyecto
     */
    async delete(id) {
        const collection = await this.getCollection();
        const result = await collection.deleteOne({ _id: new ObjectId(id) });
        return result.deletedCount > 0;
    }

    /**
     * Marca/desmarca un proyecto como destacado
     */
    async toggleFeatured(id) {
        const project = await this.findById(id);
        if (!project) return null;

        const collection = await this.getCollection();
        await collection.updateOne(
            { _id: new ObjectId(id) },
            { $set: { featured: !project.featured, updatedAt: new Date() } }
        );

        return await this.findById(id);
    }

    /**
     * Verifica si existe un proyecto con el mismo título
     */
    async existsByTitle(title, excludeId = null) {
        const collection = await this.getCollection();
        const query = { title };

        if (excludeId) {
            query._id = { $ne: new ObjectId(excludeId) };
        }

        const count = await collection.countDocuments(query);
        return count > 0;
    }
}