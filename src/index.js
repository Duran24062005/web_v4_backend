import express from 'express';
import blogs_router from './routes/blogs.routes.js';
import projects_router from './routes/projects.routes.js';
import { config } from './config/config.js';

const app = express();

app.use(express.json());


// Initial and test routes
app.get('/', (_req, res) => {
  res.send('Hello Express!')
});

app.use('/api/blogs', blogs_router);
app.use('/api/projects', projects_router);


app.listen(config.app.port, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`)
});

export default app;
