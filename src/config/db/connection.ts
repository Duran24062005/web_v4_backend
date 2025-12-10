import { MongoClient, Db } from 'mongodb';
import config from '../config.js';

class Database {
  private static instance: Database;
  private client: MongoClient;
  private db: Db | null = null;

  private constructor() {
    this.client = new MongoClient(config.mongodb.uri);
  }

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  public async connect(): Promise<Db> {
    if (this.db) {
      return this.db;
    }

    try {
      await this.client.connect();
      this.db = this.client.db(config.mongodb.dbName);
      console.log('✅ Conectado a MongoDB Atlas');
      return this.db;
    } catch (error) {
      console.error('❌ Error al conectar a MongoDB:', error);
      throw error;
    }
  }

  public async disconnect(): Promise<void> {
    if (this.client) {
      await this.client.close();
      this.db = null;
      console.log('🔌 Desconectado de MongoDB');
    }
  }

  public getDb(): Db {
    if (!this.db) {
      throw new Error('Database not initialized. Call connect() first.');
    }
    return this.db;
  }
}

export default Database;