import { ObjectId } from 'mongodb';
import connectDB from '../config/db/conection.js';

/**
 * Blog Repository - Maneja SOLO las operaciones de base de datos
 * Responsabilidad: Acceso a datos, nada de lógica de negocio
 */
export class BlogRepository {
    constructor() {
        this.collectionName = 'blogs';
    }

    /**
     * Obtiene la colección de blogs
     */
    async getCollection() {
        const db = await connectDB();
        return db.collection(this.collectionName);
    }

    /**
     * Obtiene todos los blogs
     */
    async findAll() {
        const collection = await this.getCollection();
        return await collection.find({}).toArray();
    }

    /**
     * Obtiene un blog por ID
     */
    async findById(id) {
        const collection = await this.getCollection();
        return await collection.findOne({ _id: new ObjectId(id) });
    }

    /**
     * Obtiene blogs publicados
     */
    async findPublished() {
        const collection = await this.getCollection();
        return await collection.find({ published: true }).toArray();
    }

    /**
     * Busca blogs por tags
     */
    async findByTags(tags) {
        const collection = await this.getCollection();
        return await collection.find({ tags: { $in: tags } }).toArray();
    }

    /**
     * Busca blogs por autor
     */
    async findByAuthor(author) {
        const collection = await this.getCollection();
        return await collection.find({ author }).toArray();
    }

    /**
     * Crea un nuevo blog
     */
    async create(blogData) {
        const collection = await this.getCollection();
        const result = await collection.insertOne(blogData);
        return await this.findById(result.insertedId);
    }

    /**
     * Actualiza un blog
     */
    async update(id, blogData) {
        const collection = await this.getCollection();

        // Actualiza el campo updatedAt
        blogData.updatedAt = new Date();

        await collection.updateOne(
            { _id: new ObjectId(id) },
            { $set: blogData }
        );

        return await this.findById(id);
    }

    /**
     * Elimina un blog
     */
    async delete(id) {
        const collection = await this.getCollection();
        const result = await collection.deleteOne({ _id: new ObjectId(id) });
        return result.deletedCount > 0;
    }

    /**
     * Incrementa el contador de vistas
     */
    async incrementViews(id) {
        const collection = await this.getCollection();
        await collection.updateOne(
            { _id: new ObjectId(id) },
            { $inc: { views: 1 } }
        );
        return await this.findById(id);
    }

    /**
     * Verifica si existe un blog con el mismo título
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