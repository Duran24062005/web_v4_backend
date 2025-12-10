import 'dotenv/config';

interface AppConfig {
  port: number;
}

interface MongoDBConfig {
  uri: string;
  dbName: string;
}

interface Config {
  app: AppConfig;
  mongodb: MongoDBConfig;
}

const config: Config = {
  app: {
    port: parseInt(process.env.PORT || '3000', 10)
  },
  mongodb: {
    uri: process.env.CLOUSTER || '',
    dbName: process.env.DB_NAME || 'Incautacionesde_MA_DB_20250930'
  }
};

// Validar configuración requerida
if (!config.mongodb.uri) {
  throw new Error('CLOUSTER environment variable is required');
}


export default config;