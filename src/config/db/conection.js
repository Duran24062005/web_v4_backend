import { MongoClient } from 'mongodb';
import { config } from '../config.js';

const client = new MongoClient(config.mongodb.uri);
let db;

export default async function connectDB() {
  if (db) return db;

  try {
    await client.connect();
    db = client.db('Incautacionesde_MA_DB_20250930'); // usa la base de la URI
    console.log('✅ Conectado a MongoDB Atlas');
    return db;
  } catch (error) {
    console.error('❌ Error al conectar a MongoDB:', error);
    process.exit(1);
  }
}