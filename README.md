# Web V4 BackEnd - TypeScript

## 🎯 Portafolio Profesional Backend

**Alexi Durán Gómez**  
Backend Documentation con TypeScript  
Bucaramanga, CAJASAN

---

## 📋 Tabla de Contenidos

1. [Características](#características)
2. [Stack Tecnológico](#stack-tecnológico)
3. [Instalación](#instalación)
4. [Estructura del Proyecto](#estructura-del-proyecto)
5. [API Endpoints](#api-endpoints)
6. [Scripts Disponibles](#scripts-disponibles)
7. [Despliegue](#despliegue)

---

## ✨ Características

- ✅ TypeScript para type safety
- ✅ API RESTful con Express 5
- ✅ MongoDB Atlas como base de datos
- ✅ Arquitectura por capas (Controller → Service → Database)
- ✅ Manejo de errores centralizado
- ✅ Validación de tipos en tiempo de compilación
- ✅ Hot reload con nodemon
- ✅ Patrón Singleton para conexión a BD

---

## 🛠 Stack Tecnológico

### Backend

- **Node.js** - Runtime de JavaScript
- **TypeScript 5.3+** - Superset tipado de JavaScript
- **Express 5** - Framework web
- **MongoDB** - Base de datos NoSQL
- **ts-node** - Ejecutor TypeScript para desarrollo

### Herramientas

- **nodemon** - Auto-reload en desarrollo
- **dotenv** - Gestión de variables de entorno

---

## 📦 Instalación

### Requisitos previos

- Node.js 18+
- npm o yarn
- Cuenta en MongoDB Atlas

### Pasos

1. **Clonar el repositorio**

```bash
git clone <url-del-repositorio>
cd backend
```

2. **Instalar dependencias**

```bash
npm install
```

3. **Configurar variables de entorno**

```bash
cp .env.example .env
# Editar .env con tus credenciales
```

4. **Ejecutar en desarrollo**

```bash
npm run dev
```

5. **Compilar para producción**

```bash
npm run build
npm start
```

---

## 📁 Estructura del Proyecto

```
src/
├── config/
│   ├── config.ts              # Configuración general
│   └── db/
│       └── connection.ts      # Conexión MongoDB (Singleton)
│
├── types/
│   └── models.ts              # Tipos e interfaces TypeScript
│
├── services/
│   ├── blog.service.ts        # Lógica de negocio - Blogs
│   └── project.service.ts     # Lógica de negocio - Projects
│
├── controllers/
│   ├── blogs.controller.ts    # Controladores HTTP - Blogs
│   └── projects.controller.ts # Controladores HTTP - Projects
│
├── routes/
│   ├── blogs.routes.ts        # Rutas API - Blogs
│   └── projects.routes.ts     # Rutas API - Projects
│
├── middlewares/
│   ├── logger.middleware.ts   # Logging de requests
│   └── error.middleware.ts    # Manejo de errores
│
└── index.ts                   # Punto de entrada
```

---

## 🌐 API Endpoints

### Blogs

| Método | Endpoint                    | Descripción                     |
| ------ | --------------------------- | ------------------------------- |
| GET    | `/api/blogs/all`            | Obtener todos los blogs         |
| GET    | `/api/blogs/published`      | Blogs publicados                |
| GET    | `/api/blogs/search?q=query` | Buscar blogs                    |
| GET    | `/api/blogs/:id`            | Blog por ID (incrementa vistas) |
| POST   | `/api/blogs`                | Crear nuevo blog                |
| PUT    | `/api/blogs/:id`            | Actualizar blog                 |
| DELETE | `/api/blogs/:id`            | Eliminar blog                   |

#### Ejemplo de Request (POST)

```json
{
  "title": "Mi primer blog en TypeScript",
  "content": "Contenido completo del blog...",
  "excerpt": "Resumen corto",
  "author": "Alexi Durán",
  "tags": ["typescript", "nodejs"],
  "imageUrl": "https://example.com/image.jpg",
  "published": true
}
```

### Projects

| Método | Endpoint                          | Descripción                 |
| ------ | --------------------------------- | --------------------------- |
| GET    | `/api/projects/all`               | Obtener todos los proyectos |
| GET    | `/api/projects/featured`          | Proyectos destacados        |
| GET    | `/api/projects/search?tech=react` | Buscar por tecnología       |
| GET    | `/api/projects/:id`               | Proyecto por ID             |
| POST   | `/api/projects`                   | Crear nuevo proyecto        |
| PUT    | `/api/projects/:id`               | Actualizar proyecto         |
| DELETE | `/api/projects/:id`               | Eliminar proyecto           |

#### Ejemplo de Request (POST)

```json
{
  "title": "E-commerce con TypeScript",
  "description": "Tienda online completa",
  "technologies": ["TypeScript", "React", "Node.js"],
  "imageUrl": "https://example.com/project.jpg",
  "demoUrl": "https://demo.example.com",
  "repoUrl": "https://github.com/user/repo",
  "featured": true
}
```

### Respuestas de la API

Todas las respuestas siguen el formato:

```typescript
{
  success: boolean;
  data?: T;           // Datos solicitados
  message?: string;   // Mensaje informativo
  error?: string;     // Error si success: false
}
```

---

## 📜 Scripts Disponibles

```bash
# Desarrollo con hot-reload
npm run dev

# Compilar TypeScript a JavaScript
npm run build

# Ejecutar versión compilada
npm start

# Limpiar carpeta dist
npm run clean
```

---

## 🚀 Despliegue

### Vercel

1. **Instalar Vercel CLI**

```bash
npm i -g vercel
```

2. **Desplegar**

```bash
npm run build
vercel deploy --prod
```

### Otras plataformas

El proyecto es compatible con:

- Railway
- Render
- Heroku
- AWS/Google Cloud/Azure

**Notas importantes:**

- Configura las variables de entorno en la plataforma
- Asegúrate de que la IP esté en la whitelist de MongoDB Atlas
- El comando de inicio debe ser: `node dist/index.js`

---

## 🔒 Seguridad

- ✅ Variables de entorno para datos sensibles
- ✅ Validación de ObjectId de MongoDB
- ✅ Type safety con TypeScript
- ✅ Manejo de errores robusto
- ✅ CORS configurado

---

## 🎯 Próximas Mejoras

- [ ] Autenticación JWT
- [ ] Rate limiting
- [ ] Validación con Zod o Joi
- [ ] Tests unitarios con Jest
- [ ] Documentación con Swagger
- [ ] Cache con Redis
- [ ] Upload de imágenes a S3

---

## 📝 Licencia

MIT

---

## 👤 Autor

**Alexi Durán Gómez**  
Bucaramanga, Colombia  
[GitHub](https://github.com/tu-usuario) | [LinkedIn](https://linkedin.com/in/tu-perfil)
