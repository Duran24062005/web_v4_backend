import connectDB from '../src/config/db/conection.js';
import UserRepository from '../src/repositories/UserRepository.js';

/**
 * Script para crear la colección de usuarios con índices
 * y datos de prueba iniciales
 */

async function setupUsers() {
    try {
        console.log('🌱 Configurando colección de usuarios...');

        const db = await connectDB();

        // Crear colección de usuarios si no existe
        const collections = await db.listCollections().toArray();
        const userCollectionExists = collections.some(col => col.name === 'users');

        if (!userCollectionExists) {
            console.log('📦 Creando colección de usuarios...');
            await db.createCollection('users');
        }

        // Obtener la colección
        const usersCollection = db.collection('users');

        // Crear índices
        console.log('🔑 Creando índices...');

        await usersCollection.createIndex({ email: 1 }, { unique: true });
        await usersCollection.createIndex({ document_number: 1 }, { unique: true, sparse: true });
        await usersCollection.createIndex({ role: 1 });
        await usersCollection.createIndex({ status: 1 });
        await usersCollection.createIndex({ createdAt: -1 });

        console.log('✅ Índices creados correctamente');

        // Limpiar colección (opcional - descomenta si quieres empezar de cero)
        // await usersCollection.deleteMany({});

        // Verificar si existen usuarios
        const userCount = await usersCollection.countDocuments();

        if (userCount === 0) {
            console.log('👤 Creando usuario de prueba...');

            // Crear usuario admin de prueba
            const testUser = await UserRepository.create({
                first_name: 'Admin',
                last_name: 'Test',
                email: 'admin@test.com',
                password: 'Admin123!',
                birthdate: new Date('1990-01-01'),
                document_number: '1234567890',
                role: 'admin',
                status: 'active',
                email_verified: true,
                is_admin: true,
                last_login: null,
            });

            console.log('✅ Usuario de prueba creado:');
            console.log(`   Email: admin@test.com`);
            console.log(`   Contraseña: Admin123!`);
            console.log(`   ID: ${testUser._id}`);
        } else {
            console.log(`✅ Colección ya contiene ${userCount} usuario(s)`);
        }

        console.log('\n🎉 Configuración completada');
        process.exit(0);
    } catch (error) {
        console.error('❌ Error en configuración:', error.message);
        process.exit(1);
    }
}

// Ejecutar
setupUsers();