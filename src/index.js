import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import blogs_router from './routes/blogs.routes.js';
import projects_router from './routes/projects.routes.js';
import { config } from './config/config.js';
import { isLogger } from './middlewares/logged.middleware.js';
import { errorHandler } from './utils/errors.js';
import cors from 'cors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Configuración
app.set('port', config.app.port);

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Habilitar CORS
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Middlewares globales
app.use(isLogger);
app.use(express.static(__dirname + '/public'));

// Ruta de inicio
app.get('/', (_req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Portfolio API V4',
    version: '1.0.0',
    endpoints: {
      blogs: '/api/blogs',
      projects: '/api/projects'
    }
  });
});

// Rutas de la API
app.use('/api/blogs', blogs_router);
app.use('/api/projects', projects_router);

// Ruta 404
app.all(/.*/, (req, res) => {
  res.status(404).json({
    status: 'fail',
    message: `Route ${req.originalUrl} not found`
  });
});

// Middleware de manejo de errores (debe ir al final)
app.use(errorHandler);

// Iniciar servidor
app.listen(config.app.port, () => {
  console.log(`✅ Server running on port ${app.get('port')}`);
  console.log(`🌐 http://localhost:${app.get('port')}`);
});

export default app;