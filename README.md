
# Web V4 BackEnd 


## Portafolio Profesional
**Alexi Durán Gómez**  
Back-End Documentation  
Bucaramanga, CAJASAN  
31 de Octubre de 2025

---

## Tabla de Contenidos

1. [Introducción](#introducción)
2. [Caso de Estudio](#caso-de-estudio)
3. [Planificación](#planificación)
   - [Arquitectura del Sistema](#arquitectura-del-sistema)
   - [Stack Tecnológico](#stack-tecnológico)
   - [Estructura del Proyecto](#estructura-del-proyecto)
   - [Modelo de Datos](#modelo-de-datos)
4. [Endpoints de la API](#endpoints-de-la-api)
5. [Configuración e Instalación](#configuración-e-instalación)
6. [Seguridad](#seguridad)
7. [Despliegue](#despliegue)

---

## Introducción

Este documento describe la arquitectura y funcionamiento del backend del portafolio profesional. El sistema está diseñado como una API RESTful que gestiona y proporciona acceso a la información de proyectos y artículos de blog de manera eficiente y escalable.

La API sigue el patrón arquitectónico Modelo-Vista-Controlador (MVC), lo que garantiza una separación clara de responsabilidades, facilita el mantenimiento del código y permite la escalabilidad futura del sistema. El backend actúa como intermediario entre el cliente frontend y la base de datos, exponiendo endpoints bien definidos para las operaciones CRUD.

Este proyecto está desarrollado con tecnologías modernas del ecosistema JavaScript/Node.js, aprovechando la flexibilidad de MongoDB para el almacenamiento de datos y la robustez de Express para el manejo de peticiones HTTP.

---

## Caso de Estudio

### Problemática

Los portafolios profesionales tradicionales suelen ser estáticos y difíciles de actualizar. Cada vez que se desea agregar un nuevo proyecto o artículo, es necesario modificar el código del frontend directamente, lo que resulta en un proceso tedioso y propenso a errores.

### Solución Propuesta

Este backend proporciona una capa de abstracción entre los datos del portafolio y su presentación. Al centralizar la información en una base de datos NoSQL en la nube (MongoDB Atlas), se logra:

- **Gestión dinámica de contenido**: Agregar, editar o eliminar proyectos y blogs sin modificar el código del frontend.
- **Escalabilidad**: La arquitectura permite agregar nuevas funcionalidades (certificaciones, experiencia laboral, testimonios) sin reestructurar el sistema completo.
- **Disponibilidad**: Al utilizar MongoDB Atlas, los datos están disponibles desde cualquier ubicación con alta disponibilidad y respaldo automático.
- **Separación de responsabilidades**: El frontend se enfoca únicamente en la presentación, mientras que el backend gestiona toda la lógica de negocio y acceso a datos.

### Beneficios

- Actualización de contenido en tiempo real
- Mantenimiento simplificado
- Base sólida para funcionalidades futuras
- Mayor control sobre los datos del portafolio

---

## Planificación

### Arquitectura del Sistema

El sistema implementa el patrón **MVC (Modelo-Vista-Controlador)** adaptado para una API REST:

```
Cliente (Frontend)
       ↓
    Router (Rutas)
       ↓
  Controller (Lógica de negocio)
       ↓
    Model (Esquemas y operaciones DB)
       ↓
  MongoDB Atlas (Base de datos)
```

**Componentes principales:**

- **Modelos (Models)**: Definen la estructura de los datos y gestionan las operaciones con MongoDB mediante Mongoose.
- **Controladores (Controllers)**: Contienen la lógica de negocio y procesan las peticiones HTTP.
- **Rutas (Routes)**: Definen los endpoints disponibles y los asocian con los controladores correspondientes.
- **Middlewares**: Gestionan aspectos transversales como autenticación, validación y manejo de errores.

### Stack Tecnológico

**Backend:**
- **Node.js**: Entorno de ejecución JavaScript del lado del servidor
- **Express.js**: Framework web minimalista y flexible para Node.js
- **MongoDB**: Base de datos NoSQL orientada a documentos
- **Mongoose**: ODM (Object Data Modeling) para MongoDB y Node.js

**Infraestructura:**
- **MongoDB Atlas**: Plataforma de base de datos en la nube
- **Variables de entorno**: Gestión de configuración mediante archivos .env

**Herramientas de desarrollo:**
- **npm**: Gestor de paquetes
- **nodemon**: Reinicio automático del servidor durante el desarrollo
- **dotenv**: Carga de variables de entorno

### Estructura del Proyecto

```
backend/
│
├── src/
│   ├── config/
│   │   └── database.js       # Configuración de conexión a MongoDB
│   │
│   ├── models/
│   │   ├── Project.js        # Modelo de proyectos
│   │   └── Blog.js           # Modelo de blogs
│   │
│   ├── controllers/
│   │   ├── projectController.js
│   │   └── blogController.js
│   │
│   ├── routes/
│   │   ├── projectRoutes.js
│   │   └── blogRoutes.js
│   │
│   ├── middlewares/
│   │   ├── errorHandler.js   # Manejo centralizado de errores
│   │   └── validator.js      # Validación de datos
│   │
│   └── app.js                # Configuración de Express
│
├── .env                      # Variables de entorno
├── .gitignore
├── package.json
├── server.js                 # Punto de entrada de la aplicación
└── README.md
```

### Modelo de Datos

#### Esquema de Proyectos (Projects)

```javascript
{
  title: String,           // Título del proyecto
  description: String,     // Descripción detallada
  technologies: [String],  // Array de tecnologías utilizadas
  imageUrl: String,        // URL de la imagen principal
  demoUrl: String,         // URL de la demo en vivo
  repoUrl: String,         // URL del repositorio
  featured: Boolean,       // Proyecto destacado
  createdAt: Date,         // Fecha de creación
  updatedAt: Date          // Fecha de última actualización
}
```

#### Esquema de Blogs (Blogs)

```javascript
{
  title: String,           // Título del artículo
  content: String,         // Contenido completo del artículo
  excerpt: String,         // Resumen corto
  author: String,          // Nombre del autor
  tags: [String],          // Etiquetas/categorías
  imageUrl: String,        // Imagen destacada
  published: Boolean,      // Estado de publicación
  views: Number,           // Contador de vistas
  createdAt: Date,         // Fecha de creación
  updatedAt: Date          // Fecha de última actualización
}
```

---

## Endpoints de la API

### Proyectos

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/projects` | Obtener todos los proyectos |
| GET | `/api/projects/:id` | Obtener un proyecto específico |
| POST | `/api/projects` | Crear un nuevo proyecto |
| PUT | `/api/projects/:id` | Actualizar un proyecto |
| DELETE | `/api/projects/:id` | Eliminar un proyecto |
| GET | `/api/projects/featured` | Obtener proyectos destacados |

### Blogs

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/blogs` | Obtener todos los artículos |
| GET | `/api/blogs/:id` | Obtener un artículo específico |
| POST | `/api/blogs` | Crear un nuevo artículo |
| PUT | `/api/blogs/:id` | Actualizar un artículo |
| DELETE | `/api/blogs/:id` | Eliminar un artículo |
| GET | `/api/blogs/published` | Obtener artículos publicados |

---

## Configuración e Instalación

### Requisitos previos

- Node.js (v14 o superior)
- Cuenta en MongoDB Atlas
- Git

### Pasos de instalación

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

Crear un archivo `.env` en la raíz del proyecto:

```env
PORT=5000
MONGODB_URI=mongodb+srv://<usuario>:<password>@cluster.mongodb.net/<database>
NODE_ENV=development
```

4. **Iniciar el servidor**

Modo desarrollo:
```bash
npm run dev
```

Modo producción:
```bash
npm start
```

5. **Verificar conexión**

El servidor debería estar corriendo en `http://localhost:5000`

---

## Seguridad

### Medidas implementadas

- **Variables de entorno**: Información sensible nunca está en el código fuente
- **CORS**: Configuración de orígenes permitidos para peticiones
- **Validación de datos**: Sanitización de entradas del usuario
- **Manejo de errores**: Respuestas estandarizadas sin exposición de información sensible

### Recomendaciones futuras

- Implementar autenticación JWT para endpoints de creación/edición
- Rate limiting para prevenir abuso de la API
- Encriptación de datos sensibles
- Logs de auditoría

---

## Despliegue

### Opciones de despliegue

El backend puede ser desplegado en diversas plataformas:

- **Heroku**: Solución simple con integración Git
- **Vercel**: Ideal para proyectos Node.js
- **Railway**: Alternativa moderna y fácil de usar
- **AWS/Google Cloud/Azure**: Para mayor control y escalabilidad

### Consideraciones

- Configurar variables de entorno en la plataforma de despliegue
- Asegurar que la IP del servidor esté en la whitelist de MongoDB Atlas
- Configurar el dominio y certificados SSL
- Implementar monitoreo y logs

---

## Conclusiones

Este backend proporciona una base sólida y escalable para el portafolio profesional. La arquitectura MVC facilita el mantenimiento y la adición de nuevas funcionalidades, mientras que el uso de MongoDB Atlas asegura disponibilidad y flexibilidad en el almacenamiento de datos.

El sistema está preparado para crecer con nuevas características como gestión de certificaciones, experiencia laboral, testimonios y más, manteniendo siempre la simplicidad y claridad del código.

---

To develop locally:

```
npm install
vc dev
```

```
open http://localhost:3000
```

To build locally:

```
npm install
vc build
```

To deploy:

```
npm install
vc deploy
```
