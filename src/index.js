import express from 'express';
import blogs_router from './routes/blogs.routes.js';
import projects_router from './routes/projects.routes.js';
import { config } from './config/config.js';
import { isLogger } from './middlewares/logged.middleware.js';

const app = express();


app.set('port', config.app.port);
app.use(express.json());

// Middlewares
app.use(isLogger);

// Initial and test routes
app.get('/', (_req, res) => {
  res.send('Hello Express!')
});

app.use('/api/blogs', blogs_router);
app.use('/api/projects', projects_router);


app.listen(config.app.port, () => {
  console.log(`Server is running on port ${app.get('port')}`);
});

export default app;
