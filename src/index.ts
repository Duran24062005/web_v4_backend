import express, { Application } from 'express';
import { config } from './config/config.js';
import Database from './config/db/connection.js';
import blogRouter from './routes/blogs.routes.js';
import projectRouter from './routes/projects.routes.js';
import { loggerMiddleware } from './middlewares/logged.middleware.js';
import { errorHandler, notFoundHandler } from './middlewares/error.middleware.js';

const app: Application = express();

// Configuración
app.set('port', config.app.port);

// Middlewares globales
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(loggerMiddleware);

// CORS (opcional)
app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Ruta de health check
app.get('/', (_req, res) => {
  res.json({
    success: true,
    message: 'Portfolio Backend API - TypeScript',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

// Rutas de la API
app.use('/api/blogs', blogRouter);
app.use('/api/projects', projectRouter);

// Manejadores de errores (deben ir al final)
app.use(notFoundHandler);
app.use(errorHandler);

// Iniciar servidor
const startServer = async (): Promise<void> => {
  try {
    // Conectar a la base de datos
    const db = Database.getInstance();
    await db.connect();

    // Iniciar servidor
    app.listen(config.app.port, () => {
      console.log(`🚀 Server running on port ${config.app.port}`);
      console.log(`📡 API disponible en http://localhost:${config.app.port}`);
      console.log(`📚 Blogs: http://localhost:${config.app.port}/api/blogs`);
      console.log(`💼 Projects: http://localhost:${config.app.port}/api/projects`);
    });
  } catch (error) {
    console.error('❌ Error al iniciar el servidor:', error);
    process.exit(1);
  }
};

// Manejo de señales de cierre
process.on('SIGINT', async () => {
  console.log('\n🛑 Cerrando servidor...');
  const db = Database.getInstance();
  await db.disconnect();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  console.log('\n🛑 Cerrando servidor...');
  const db = Database.getInstance();
  await db.disconnect();
  process.exit(0);
});

// Iniciar
startServer();

export default app;