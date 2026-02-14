import { ObjectId } from 'mongodb';
import bcryptjs from 'bcryptjs';
import connectDB from '../config/db/conection.js';

/**
 * UserRepository - Usando driver oficial de MongoDB
 * Capa de acceso a datos (Data Access Layer)
 * Responsabilidad: SOLO operaciones con la base de datos (CRUD)
 * No contiene lógica de negocio, NO valida datos
 */
class UserRepository {
    constructor() {
        this.collectionName = 'users';
    }

    /**
     * Obtiene la colección de usuarios
     */
    async getCollection() {
        const db = await connectDB();
        return db.collection(this.collectionName);
    }

    /**
     * Crear un nuevo usuario
     * @param {Object} userData - Datos del usuario
     * @returns {Promise<Object>} Usuario creado
     */
    async create(userData) {
        const collection = await this.getCollection();

        // Hash de la contraseña
        const salt = await bcryptjs.genSalt(10);
        userData.password = await bcryptjs.hash(userData.password, salt);

        // Agregar timestamps
        userData.createdAt = new Date();
        userData.updatedAt = new Date();

        const result = await collection.insertOne(userData);

        return await this.findById(result.insertedId.toString());
    }

    /**
     * Obtener usuario por ID
     * @param {string} id - ID del usuario
     * @returns {Promise<Object|null>} Usuario o null
     */
    async findById(id) {
        const collection = await this.getCollection();

        try {
            const user = await collection.findOne({ _id: new ObjectId(id) });
            return user;
        } catch (error) {
            return null;
        }
    }

    /**
     * Obtener usuario por email
     * @param {string} email - Email del usuario
     * @returns {Promise<Object|null>} Usuario o null (incluye contraseña)
     */
    async findByEmail(email) {
        const collection = await this.getCollection();

        const user = await collection.findOne({
            email: email.toLowerCase()
        });

        return user;
    }

    /**
     * Obtener usuario por número de documento
     * @param {string} documentNumber - Número de documento
     * @returns {Promise<Object|null>} Usuario o null
     */
    async findByDocumentNumber(documentNumber) {
        const collection = await this.getCollection();

        const user = await collection.findOne({
            document_number: documentNumber
        });

        return user;
    }

    /**
     * Obtener todos los usuarios con filtros
     * @param {Object} filters - Filtros de búsqueda
     * @param {number} page - Número de página
     * @param {number} limit - Límite de resultados
     * @returns {Promise<{users: Array, total: number}>}
     */
    async findAll(filters = {}, page = 1, limit = 10) {
        const collection = await this.getCollection();
        const skip = (page - 1) * limit;

        const users = await collection
            .find(filters)
            .limit(limit)
            .skip(skip)
            .sort({ createdAt: -1 })
            .toArray();

        const total = await collection.countDocuments(filters);

        return { users, total };
    }

    /**
     * Obtener usuarios pendientes
     * @returns {Promise<Array>} Usuarios pendientes
     */
    async findPending() {
        const collection = await this.getCollection();

        return await collection
            .find({ status: 'pending' })
            .sort({ createdAt: -1 })
            .toArray();
    }

    /**
     * Actualizar usuario
     * @param {string} id - ID del usuario
     * @param {Object} updateData - Datos a actualizar
     * @returns {Promise<Object|null>} Usuario actualizado o null
     */
    async update(id, updateData) {
        const collection = await this.getCollection();

        // Actualizar timestamp
        updateData.updatedAt = new Date();

        try {
            await collection.updateOne(
                { _id: new ObjectId(id) },
                { $set: updateData }
            );

            return await this.findById(id);
        } catch (error) {
            return null;
        }
    }

    /**
     * Eliminar usuario
     * @param {string} id - ID del usuario
     * @returns {Promise<boolean>} True si se eliminó, false si no
     */
    async delete(id) {
        const collection = await this.getCollection();

        try {
            const result = await collection.deleteOne({
                _id: new ObjectId(id)
            });

            return result.deletedCount > 0;
        } catch (error) {
            return false;
        }
    }

    /**
     * Verificar si email existe
     * @param {string} email - Email a verificar
     * @returns {Promise<boolean>}
     */
    async emailExists(email) {
        const collection = await this.getCollection();

        const user = await collection.findOne({
            email: email.toLowerCase()
        });

        return user !== null;
    }

    /**
     * Verificar si documento existe
     * @param {string} documentNumber - Documento a verificar
     * @returns {Promise<boolean>}
     */
    async documentExists(documentNumber) {
        const collection = await this.getCollection();

        const user = await collection.findOne({
            document_number: documentNumber
        });

        return user !== null;
    }

    /**
     * Contar usuarios por role
     * @param {string} role - Role a contar
     * @returns {Promise<number>}
     */
    async countByRole(role) {
        const collection = await this.getCollection();
        return await collection.countDocuments({ role });
    }

    /**
     * Contar usuarios por status
     * @param {string} status - Status a contar
     * @returns {Promise<number>}
     */
    async countByStatus(status) {
        const collection = await this.getCollection();
        return await collection.countDocuments({ status });
    }

    /**
     * Actualizar último login
     * @param {string} id - ID del usuario
     * @returns {Promise<Object|null>}
     */
    async updateLastLogin(id) {
        const collection = await this.getCollection();

        await collection.updateOne(
            { _id: new ObjectId(id) },
            { $set: { last_login: new Date(), updatedAt: new Date() } }
        );

        return await this.findById(id);
    }

    /**
     * Comparar contraseña con hash
     * @param {string} password - Contraseña en texto plano
     * @param {string} hashedPassword - Contraseña hasheada
     * @returns {Promise<boolean>}
     */
    async comparePassword(password, hashedPassword) {
        return await bcryptjs.compare(password, hashedPassword);
    }

    /**
     * Obtener usuario sin campos sensibles
     * @param {Object} user - Documento del usuario
     * @returns {Object} Usuario sin contraseña
     */
    userToJSON(user) {
        if (!user) return null;

        const { password, ...userWithoutPassword } = user;
        return userWithoutPassword;
    }
}

export default new UserRepository();