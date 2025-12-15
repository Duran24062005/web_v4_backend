import connectDB from '../src/config/db/conection.js';
import { ObjectId } from 'mongodb';

export const projectsMockData = [
    {
        _id: new ObjectId(),
        "title": "Filtro_HTML_DuranAlexi",
        "description": "Aplicativo Web desarrollado para analizar casos de estudio de usuarios que solicitan requerimientos a la DIAN. Implementa el primer flujo de entrada diseñado por el equipo de UI/UX, mostrando historias de usuarios para personas naturales y jurídicas.",
        "technologies": ["HTML", "CSS"],
        "imageUrl": "https://web-v4-backend.vercel.app/1.png",
        "demoUrl": "https://duran24062005.github.io/Filtro_HTML_DuranAlexi/",
        "repoUrl": "https://github.com/Duran24062005/Filtro_HTML_DuranAlexi",
        "featured": true,
        "createdAt": "2024-01-15T00:00:00.000Z",
        "updatedAt": "2025-12-12T01:27:50.453Z"
    },
    {
        _id: new ObjectId(),
        "title": "HTML_S2_DuranAlexi Dia 3",
        "description": "Página web con formulario de registro completo que incluye diversos campos de información. Proyecto desarrollado como ejercicio práctico de clase para dominar la creación de formularios HTML con validación y estilos CSS personalizados.",
        "technologies": ["HTML", "CSS"],
        "imageUrl": "https://web-v4-backend.vercel.app/2.png",
        "demoUrl": "https://duran24062005.github.io/HTML_S2_DuranAlexi/Dia3/",
        "repoUrl": "https://github.com/Duran24062005/HTML_S2_DuranAlexi/tree/main/Dia3",
        "featured": false,
        "createdAt": "2024-02-01T00:00:00.000Z",
        "updatedAt": "2025-12-12T01:27:50.453Z"
    },
    {
        _id: new ObjectId(),
        "title": "HTML_S2_DuranAlexi Dia 7",
        "description": "Proyecto práctico enfocado en el dominio de Flexbox CSS. Implementa diversos layouts y diseños responsivos utilizando las propiedades de display flex para crear interfaces modernas y adaptables.",
        "technologies": ["HTML", "CSS"],
        "imageUrl": "https://web-v4-backend.vercel.app/3.png",
        "demoUrl": "https://duran24062005.github.io/HTML_S2_DuranAlexi/Dia7/",
        "repoUrl": "https://github.com/Duran24062005/HTML_S2_DuranAlexi/tree/main/Dia7",
        "featured": false,
        "createdAt": "2024-02-05T00:00:00.000Z",
        "updatedAt": "2025-12-12T01:27:50.453Z"
    },
    {
        _id: new ObjectId(),
        "title": "HTML_S2_DuranAlexi Practica Dia CssGrid",
        "description": "Ejercicio práctico para dominar CSS Grid Layout. Implementa sistemas de grillas complejas y diseños bidimensionales, explorando las capacidades avanzadas de CSS Grid para crear layouts profesionales.",
        "technologies": ["HTML", "CSS"],
        "imageUrl": "https://web-v4-backend.vercel.app/4.png",
        "demoUrl": "https://duran24062005.github.io/HTML_S2_DuranAlexi/practicaDia9CssGrid/",
        "repoUrl": "https://github.com/Duran24062005/HTML_S2_DuranAlexi/tree/main/practicaDia9CssGrid",
        "featured": false,
        "createdAt": "2024-02-10T00:00:00.000Z",
        "updatedAt": "2025-12-12T01:27:50.453Z"
    },
    {
        _id: new ObjectId(),
        "title": "HTML_S2_DuranAlexi Hoja de vida",
        "description": "Curriculum vitae digital desarrollado con HTML y CSS. Presenta información personal, académica y profesional en un formato web elegante y responsive, ideal para compartir online.",
        "technologies": ["HTML", "CSS"],
        "imageUrl": "https://web-v4-backend.vercel.app/5.png",
        "demoUrl": "https://duran24062005.github.io/HTML_S2_DuranAlexi/Dia2/hojaDeVida.html",
        "repoUrl": "https://github.com/Duran24062005/HTML_S2_DuranAlexi/tree/main/Dia2",
        "featured": false,
        "createdAt": "2024-01-28T00:00:00.000Z",
        "updatedAt": "2025-12-12T01:27:50.453Z"
    },
    {
        _id: new ObjectId(),
        "title": "HTML_S2_DuranAlexi Css animaciones",
        "description": "Proyecto dedicado al aprendizaje y práctica de animaciones CSS. Incluye transiciones, transformaciones y keyframes para crear efectos visuales atractivos y experiencias de usuario dinámicas.",
        "technologies": ["HTML", "CSS"],
        "imageUrl": "https://web-v4-backend.vercel.app/6.png",
        "demoUrl": "https://duran24062005.github.io/HTML_S2_DuranAlexi/Dia13/",
        "repoUrl": "https://github.com/Duran24062005/HTML_S2_DuranAlexi/tree/main/Dia13",
        "featured": false,
        "createdAt": "2024-02-18T00:00:00.000Z",
        "updatedAt": "2025-12-12T01:27:50.453Z"
    },
    {
        _id: new ObjectId(),
        "title": "HTML_S2_DuranAlexi Grid Practice",
        "description": "Ejercicios avanzados de CSS Grid para perfeccionar el diseño de layouts complejos. Implementa diferentes técnicas de posicionamiento y distribución de elementos en sistemas de grillas.",
        "technologies": ["HTML", "CSS"],
        "imageUrl": "https://web-v4-backend.vercel.app/7.png",
        "demoUrl": "https://duran24062005.github.io/HTML_S2_DuranAlexi/GridPractice/",
        "repoUrl": "https://github.com/Duran24062005/HTML_S2_DuranAlexi/tree/main/GridPractice",
        "featured": false,
        "createdAt": "2024-02-12T00:00:00.000Z",
        "updatedAt": "2025-12-12T01:27:50.453Z"
    },
    {
        _id: new ObjectId(),
        "title": "HTML_S2_DuranAlexi Coffe Shop Web",
        "description": "Sitio web para una cafetería desarrollado con CSS Grid. Presenta un diseño atractivo y moderno con menú de productos, galería de imágenes y secciones informativas sobre el establecimiento.",
        "technologies": ["HTML", "CSS"],
        "imageUrl": "https://web-v4-backend.vercel.app/8.png",
        "demoUrl": "https://duran24062005.github.io/HTML_S2_DuranAlexi/coffeShopWeb/",
        "repoUrl": "https://github.com/Duran24062005/HTML_S2_DuranAlexi/tree/main/coffeShopWeb",
        "featured": false,
        "createdAt": "2024-02-15T00:00:00.000Z",
        "updatedAt": "2025-12-12T01:27:50.453Z"
    },
    {
        _id: new ObjectId(),
        "title": "HTML_S2_DuranAlexi Metroline",
        "description": "Proyecto de práctica de CSS Grid con diseño inspirado en sistemas de transporte metropolitano. Implementa layouts complejos y responsive para mostrar información de rutas y estaciones.",
        "technologies": ["HTML", "CSS"],
        "imageUrl": "https://web-v4-backend.vercel.app/9.png",
        "demoUrl": "https://duran24062005.github.io/HTML_S2_DuranAlexi/metroline/",
        "repoUrl": "https://github.com/Duran24062005/HTML_S2_DuranAlexi/tree/main/metroline",
        "featured": false,
        "createdAt": "2024-02-20T00:00:00.000Z",
        "updatedAt": "2025-12-12T01:27:50.453Z"
    },
    {
        _id: new ObjectId(),
        "title": "HTML_S2_DuranAlexi Practica Amazon Prime",
        "description": "Clone de interfaz inspirado en Amazon Prime utilizando CSS Grid. Replica el diseño de la plataforma de streaming con catálogo de contenido, carruseles y navegación intuitiva.",
        "technologies": ["HTML", "CSS"],
        "imageUrl": "https://web-v4-backend.vercel.app/10.png",
        "demoUrl": "https://duran24062005.github.io/HTML_S2_DuranAlexi/practica/",
        "repoUrl": "https://github.com/Duran24062005/HTML_S2_DuranAlexi/tree/main/practica",
        "featured": false,
        "createdAt": "2024-02-22T00:00:00.000Z",
        "updatedAt": "2025-12-12T01:27:50.453Z"
    },
    {
        _id: new ObjectId(),
        "title": "Proyecto_HTML-CSS_DuranAlexi_VillazonRene",
        "description": "Proyecto colaborativo desarrollado por Alexi Durán Gómez y René Vizallon para demostrar conocimientos adquiridos en HTML y CSS. Diseñado en Figma e implementado siguiendo las mejores prácticas de desarrollo frontend.",
        "technologies": ["HTML", "CSS", "Figma"],
        "imageUrl": "https://web-v4-backend.vercel.app/11.png",
        "demoUrl": "https://duran24062005.github.io/Proyecto_HTML-CSS_DuranAlexi_VillazonRene/",
        "repoUrl": "https://github.com/Duran24062005/Proyecto_HTML-CSS_DuranAlexi_VillazonRene",
        "featured": true,
        "createdAt": "2024-03-01T00:00:00.000Z",
        "updatedAt": "2025-12-12T01:27:50.453Z"
    },
    {
        _id: new ObjectId(),
        "title": "FILTRO_JS_DURANALEXI",
        "description": "Aplicación web interactiva desarrollada con JavaScript vanilla. Implementa funcionalidades de filtrado dinámico y manipulación del DOM para crear experiencias de usuario fluidas y responsivas.",
        "technologies": ["HTML", "CSS", "JavaScript"],
        "imageUrl": "https://web-v4-backend.vercel.app/12.png",
        "demoUrl": "https://duran24062005.github.io/FILTRO_JS_DURANALEXI/",
        "repoUrl": "https://github.com/Duran24062005/FILTRO_JS_DURANALEXI",
        "featured": false,
        "createdAt": "2024-03-10T00:00:00.000Z",
        "updatedAt": "2025-12-12T01:27:50.453Z"
    },
    {
        _id: new ObjectId(),
        "title": "Proyecto_JavaScript_S2_DuranAlexi_AriasNicol",
        "description": "Plataforma de gestión del aprendizaje (LMS) con múltiples perfiles de usuario (administradores, docentes y estudiantes). Sistema modular que permite gestión de cursos, seguimiento académico y interacción pedagógica. Diseñado con arquitectura escalable utilizando APIs y Fetch API.",
        "technologies": ["HTML", "CSS", "JavaScript", "API", "Fetch API", "Figma"],
        "imageUrl": "https://web-v4-backend.vercel.app/13.png",
        "demoUrl": "https://duran24062005.github.io/Proyecto_JavaScript_S2_DuranAlexi_AriasNicol/pages/dashboard.html",
        "repoUrl": "https://github.com/Duran24062005/Proyecto_JavaScript_S2_DuranAlexi_AriasNicol",
        "featured": true,
        "createdAt": "2024-04-01T00:00:00.000Z",
        "updatedAt": "2025-12-12T01:27:50.453Z"
    },
    {
        _id: new ObjectId(),
        "title": "JavaScript_S2_DuranAlexi DOM",
        "description": "Proyecto enfocado en la manipulación del Document Object Model (DOM) con JavaScript. Implementa técnicas de selección de elementos, eventos, modificación de estilos y creación dinámica de contenido.",
        "technologies": ["HTML", "CSS", "JavaScript"],
        "imageUrl": "https://web-v4-backend.vercel.app/14.png",
        "demoUrl": "https://duran24062005.github.io/JavaScript_S2_DuranAlexi/DOM/",
        "repoUrl": "https://github.com/Duran24062005/JavaScript_S2_DuranAlexi/tree/main/DOM",
        "featured": false,
        "createdAt": "2024-03-15T00:00:00.000Z",
        "updatedAt": "2025-12-12T01:27:50.453Z"
    },
    {
        _id: new ObjectId(),
        "title": "JavaScript_S2_DuranAlexi Consumo de API Rick&Morty con XML",
        "description": "Aplicación que consume la API de Rick and Morty utilizando XMLHttpRequest. Muestra personajes de la serie con sus características, implementando paginación y búsqueda en tiempo real.",
        "technologies": ["HTML", "CSS", "JavaScript", "XML", "API"],
        "imageUrl": "https://web-v4-backend.vercel.app/15.png",
        "demoUrl": "https://duran24062005.github.io/JavaScript_S2_DuranAlexi/Dia4/",
        "repoUrl": "https://github.com/Duran24062005/JavaScript_S2_DuranAlexi/tree/main/Dia4",
        "featured": false,
        "createdAt": "2024-03-18T00:00:00.000Z",
        "updatedAt": "2025-12-12T01:27:50.453Z"
    },
    {
        _id: new ObjectId(),
        "title": "JavaScript_S2_DuranAlexi Consumo de API Rick&Morty con XML Por consola",
        "description": "Implementación de consumo de API de Rick and Morty a través de consola utilizando XMLHttpRequest. Proyecto educativo para entender peticiones HTTP y manejo de respuestas JSON.",
        "technologies": ["HTML", "CSS", "JavaScript", "XML", "API", "Consola"],
        "imageUrl": "https://web-v4-backend.vercel.app/16.png",
        "demoUrl": "https://duran24062005.github.io/JavaScript_S2_DuranAlexi/Dia5/",
        "repoUrl": "https://github.com/Duran24062005/JavaScript_S2_DuranAlexi/tree/main/Dia5",
        "featured": false,
        "createdAt": "2024-03-20T00:00:00.000Z",
        "updatedAt": "2025-12-12T01:27:50.453Z"
    },
    {
        _id: new ObjectId(),
        "title": "JavaScript_S2_DuranAlexi Consumo de API Pokemon con XML",
        "description": "Pokedex interactiva que consume la PokeAPI utilizando XMLHttpRequest. Muestra información detallada de Pokémon incluyendo estadísticas, tipos, habilidades y sprites animados.",
        "technologies": ["HTML", "CSS", "JavaScript", "XML", "API"],
        "imageUrl": "https://web-v4-backend.vercel.app/17.png",
        "demoUrl": "https://duran24062005.github.io/JavaScript_S2_DuranAlexi/Dia6/pokeapi/",
        "repoUrl": "https://github.com/Duran24062005/JavaScript_S2_DuranAlexi/tree/main/Dia6/pokeapi",
        "featured": false,
        "createdAt": "2024-03-22T00:00:00.000Z",
        "updatedAt": "2025-12-12T01:27:50.453Z"
    },
    {
        _id: new ObjectId(),
        "title": "JavaScript_S2_DuranAlexi ToDo App",
        "description": "Aplicación de gestión de tareas con funcionalidades CRUD completas. Permite crear, leer, actualizar y eliminar tareas, con persistencia de datos y filtrado por estado (completadas/pendientes).",
        "technologies": ["HTML", "CSS", "JavaScript", "XML", "API"],
        "imageUrl": "https://web-v4-backend.vercel.app/18.png",
        "demoUrl": "https://duran24062005.github.io/JavaScript_S2_DuranAlexi/Dia7/",
        "repoUrl": "https://github.com/Duran24062005/JavaScript_S2_DuranAlexi/tree/main/Dia7",
        "featured": false,
        "createdAt": "2024-03-25T00:00:00.000Z",
        "updatedAt": "2025-12-12T01:27:50.453Z"
    },
    {
        _id: new ObjectId(),
        "title": "JavaScript_S2_DuranAlexi PokerApi",
        "description": "Aplicación de cartas de póker que consume una API para generar mazos y repartir cartas. Implementa lógica de juego básica y visualización interactiva de naipes.",
        "technologies": ["HTML", "CSS", "JavaScript", "XML", "API"],
        "imageUrl": "https://web-v4-backend.vercel.app/19.png",
        "demoUrl": "https://duran24062005.github.io/JavaScript_S2_DuranAlexi/pokerapi/",
        "repoUrl": "https://github.com/Duran24062005/JavaScript_S2_DuranAlexi/tree/main/pokerapi",
        "featured": false,
        "createdAt": "2024-03-28T00:00:00.000Z",
        "updatedAt": "2025-12-12T01:27:50.453Z"
    },
    {
        _id: new ObjectId(),
        "title": "JavaScript_S2_DuranAlexi Super Heroes Api",
        "description": "Buscador de superhéroes que consume la SuperHero API. Estilizado con Tailwind CSS, permite buscar héroes por nombre y mostrar sus poderes, biografía, estadísticas y apariencia.",
        "technologies": ["HTML", "CSS", "JavaScript", "Tailwind CSS", "XML", "API"],
        "imageUrl": "https://web-v4-backend.vercel.app/20.png",
        "demoUrl": "https://duran24062005.github.io/JavaScript_S2_DuranAlexi/superheroesapi/",
        "repoUrl": "https://github.com/Duran24062005/JavaScript_S2_DuranAlexi/tree/main/superheroesapi",
        "featured": false,
        "createdAt": "2024-04-01T00:00:00.000Z",
        "updatedAt": "2025-12-12T01:27:50.453Z"
    },
    {
        _id: new ObjectId(),
        "title": "JavaScript_S2_DuranAlexi TodoApp",
        "description": "Gestor de tareas moderno desarrollado con Tailwind CSS. Interfaz intuitiva para organizar actividades diarias con opciones de filtrado, edición inline y diseño responsive.",
        "technologies": ["HTML", "CSS", "JavaScript", "Tailwind CSS", "XML", "API"],
        "imageUrl": "https://web-v4-backend.vercel.app/21.png",
        "demoUrl": "https://duran24062005.github.io/JavaScript_S2_DuranAlexi/todoApp/",
        "repoUrl": "https://github.com/Duran24062005/JavaScript_S2_DuranAlexi/tree/main/todoApp",
        "featured": false,
        "createdAt": "2024-04-05T00:00:00.000Z",
        "updatedAt": "2025-12-12T01:27:50.453Z"
    },
    {
        _id: new ObjectId(),
        "title": "JavaScript_S2_DuranAlexi API de Star Wars",
        "description": "Enciclopedia interactiva del universo Star Wars que consume SWAPI. Explora personajes, planetas, naves espaciales, vehículos y especies con información detallada y referencias cruzadas.",
        "technologies": ["HTML", "CSS", "JavaScript", "XML", "API"],
        "imageUrl": "https://web-v4-backend.vercel.app/22.png",
        "demoUrl": "https://duran24062005.github.io/JavaScript_S2_DuranAlexi/swapi/",
        "repoUrl": "https://github.com/Duran24062005/JavaScript_S2_DuranAlexi/tree/main/swapi",
        "featured": false,
        "createdAt": "2024-04-08T00:00:00.000Z",
        "updatedAt": "2025-12-12T01:27:50.453Z"
    },
    {
        _id: new ObjectId(),
        "title": "JavaScript_S2_DuranAlexi Gestor App",
        "description": "Simulador de Gastos Diarios es una aplicación de consola diseñada para ayudar a los usuarios a registrar y monitorear sus gastos diarios en diferentes categorías, como comida, transporte, entretenimiento, entre otros. Este simulador permite llevar un control básico de los gastos diarios, semanales o mensuales y obtener un resumen o reporte de los gastos en cada categoría. Toda la información se guarda en un archivo JSON, lo que permite tener un historial de gastos entre distintas sesiones del programa.",
        "technologies": ["HTML", "JavaScript"],
        "imageUrl": "https://web-v4-backend.vercel.app/23.png",
        "demoUrl": "https://duran24062005.github.io/JavaScript_S2_DuranAlexi/Dia1/homework/",
        "repoUrl": "https://github.com/Duran24062005/JavaScript_S2_DuranAlexi/tree/main/Dia1/homework",
        "featured": false,
        "createdAt": "2024-03-12T00:00:00.000Z",
        "updatedAt": "2025-12-12T01:27:50.453Z"
    },
    {
        _id: new ObjectId(),
        "title": "JavaScript_S2_DuranAlexi Quiz Sorpresa",
        "description": "Sistema de gestión de ingredientes para la cafetería de Campuslands. Soluciona el desafío de controlar la disponibilidad de ingredientes para hamburguesas, evitando faltantes y desperdicios. Mejora la experiencia del cliente y optimiza costos operativos.",
        "technologies": ["HTML", "JavaScript"],
        "imageUrl": "https://web-v4-backend.vercel.app/24.png",
        "demoUrl": "https://duran24062005.github.io/JavaScript_S2_DuranAlexi/quiz_sorpresa/",
        "repoUrl": "https://github.com/Duran24062005/JavaScript_S2_DuranAlexi/tree/main/quiz_sorpresa",
        "featured": false,
        "createdAt": "2024-04-10T00:00:00.000Z",
        "updatedAt": "2025-12-12T01:27:50.453Z"
    },
    {
        _id: new ObjectId(),
        "title": "UserManagerExpress",
        "description": "API REST para gestión de usuarios desarrollada con Node.js y Express. Soporta múltiples bases de datos (MongoDB y MySQL) con endpoints para operaciones CRUD completas y autenticación de usuarios.",
        "technologies": ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB", "MySQL"],
        "imageUrl": "https://web-v4-backend.vercel.app/25.png",
        "demoUrl": "https://user-manager-express.vercel.app/api/users2/all",
        "repoUrl": "https://github.com/Duran24062005/UserManagerExpress",
        "featured": true,
        "createdAt": "2024-05-01T00:00:00.000Z",
        "updatedAt": "2025-12-12T01:27:50.453Z"
    },
    {
        _id: new ObjectId(),
        "title": "Express_Backend",
        "description": "Backend robusto desarrollado con Express.js y MySQL. Implementa arquitectura RESTful con rutas organizadas, middlewares personalizados y conexión a base de datos relacional para aplicaciones empresariales.",
        "technologies": ["JavaScript", "Node.js", "Express.js", "MySQL"],
        "imageUrl": "https://web-v4-backend.vercel.app/26.png",
        "demoUrl": "https://express-backend-phi.vercel.app/",
        "repoUrl": "https://github.com/Duran24062005/Express_Backend",
        "featured": false,
        "createdAt": "2024-05-10T00:00:00.000Z",
        "updatedAt": "2025-12-12T01:27:50.453Z"
    },
    {
        _id: new ObjectId(),
        "title": "WebSocket.io",
        "description": "Aplicación de comunicación en tiempo real utilizando Socket.io. Implementa chat bidireccional, notificaciones instantáneas y sincronización de datos entre múltiples clientes conectados.",
        "technologies": ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "Socket.io"],
        "imageUrl": "https://web-v4-backend.vercel.app/27.png",
        "demoUrl": "https://express-backend-phi.vercel.app/",
        "repoUrl": "https://github.com/Duran24062005/Express_Backend",
        "featured": false,
        "createdAt": "2024-05-15T00:00:00.000Z",
        "updatedAt": "2025-12-12T01:27:50.453Z"
    },
    {
        _id: new ObjectId(),
        "title": "Web_V4",
        "description": "Aplicación web moderna desarrollada con React.js. Integra Socket.io para funcionalidades en tiempo real, diseño responsive y arquitectura de componentes reutilizables para una experiencia de usuario fluida.",
        "technologies": ["HTML", "CSS", "JavaScript", "Node.js", "React.js", "Socket.io"],
        "imageUrl": "https://web-v4-backend.vercel.app/28.png",
        "demoUrl": "https://my-web-production-xi.vercel.app/",
        "repoUrl": "https://github.com/Duran24062005/Web_V4",
        "featured": true,
        "createdAt": "2024-06-01T00:00:00.000Z",
        "updatedAt": "2025-12-12T01:27:50.453Z"
    },
    {
        _id: new ObjectId(),
        "title": "web_v4_backend",
        "description": "La API sigue el patrón arquitectónico Modelo-Vista-Controlador (MVC), lo que garantiza una separación clara de responsabilidades, facilita el mantenimiento del código y permite la escalabilidad futura del sistema. El backend actúa como intermediario entre el cliente frontend y la base de datos, exponiendo endpoints bien definidos para las operaciones CRUD.",
        "technologies": ["JavaScript", "Node.js", "Express.js", "MongoDB"],
        "imageUrl": "https://web-v4-backend.vercel.app/29.png",
        "demoUrl": "https://web-v4-backend.vercel.app/",
        "repoUrl": "https://github.com/Duran24062005/web_v4_backend",
        "featured": true,
        "createdAt": "2024-06-01T00:00:00.000Z",
        "updatedAt": "2025-12-12T01:27:50.453Z"
    },
    {
        _id: new ObjectId(),
        "title": "Email_Python_FastAPI",
        "description": "API REST para envío de emails con plantillas personalizables en HTML, construida con FastAPI y siguiendo principios SOLID.",
        "technologies": ["Python", "FastAPI", "SQLAlchemy", "PostgreSQL"],
        "imageUrl": "https://web-v4-backend.vercel.app/30.png",
        "demoUrl": "https://email-python-fast-api.vercel.app/",
        "repoUrl": "https://github.com/Duran24062005/Email_Python_FastAPI",
        "featured": false,
        "createdAt": "2024-07-01T00:00:00.000Z",
        "updatedAt": "2025-12-12T01:27:50.453Z"
    },
    {
        _id: new ObjectId(),
        "title": "FastAPI-Platzi",
        "description": "Es una aplicación simple en FastAPI desarrollada en un curso de Platzi. FastAPI as the API backend.",
        "technologies": ["Python", "FastAPI", "SQLAlchemy", "SQLite", "PostgreSQL", "Docker"],
        "imageUrl": "https://web-v4-backend.vercel.app/31.png",
        "demoUrl": "https://fast-api-platzi.vercel.app/",
        "repoUrl": "https://github.com/Duran24062005/FastAPI-Platzi",
        "featured": false,
        "createdAt": "2024-07-15T00:00:00.000Z",
        "updatedAt": "2025-12-12T01:27:50.453Z"
    },
    {
        _id: new ObjectId(),
        "title": "Proyecto_Python_DuranAlexi",
        "description": "El Simulador de Gastos Diarios es una aplicación de consola diseñada para ayudar a los usuarios a registrar y monitorear sus gastos diarios en diferentes categorías, como comida, transporte, entretenimiento, entre otros. Este simulador permite llevar un control básico de los gastos diarios, semanales o mensuales y obtener un resumen o reporte de los gastos en cada categoría. Toda la información se guarda en un archivo JSON, lo que permite tener un historial de gastos entre distintas sesiones del programa.",
        "technologies": ["Python", "Consola"],
        "imageUrl": "https://web-v4-backend.vercel.app/32.png",
        "demoUrl": null,
        "repoUrl": "https://github.com/Duran24062005/Proyecto_Python_DuranAlexi",
        "featured": false,
        "createdAt": "2024-08-01T00:00:00.000Z",
        "updatedAt": "2025-12-12T01:27:50.453Z"
    },
    {
        _id: new ObjectId(),
        "title": "vibra_cultural",
        "description": "Este es un sitio web tipo blog enfocado en rescatar, compartir y promover la identidad cultural de nuestro pueblo natal, a través de contenido multimedia, artículos, historias, costumbres, personajes históricos y actuales, además de videos y fotografías que documenten su riqueza cultural.",
        "technologies": ["TypeScript", "React.js", "Tailwind CSS"],
        "imageUrl": "https://web-v4-backend.vercel.app/33.png",
        "demoUrl": "https://culural-vibes-web.vercel.app/",
        "repoUrl": "https://github.com/Duran24062005/vibra_cultural",
        "featured": true,
        "createdAt": "2024-09-01T00:00:00.000Z",
        "updatedAt": "2025-12-12T01:27:50.453Z"
    }
];



async function seedDatabase() {
    try {
        console.log('🌱 Starting database seeding...');

        const db = await connectDB();

        // Limpiar colecciones existentes
        console.log('🗑️  Cleaning existing data...');
        await db.collection('projects').deleteMany({});

        // Insertar proyectos
        console.log('📦 Inserting projects...');
        const projectsResult = await db.collection('projects').insertMany(projectsMockData);
        console.log(`✅ ${projectsResult.insertedCount} projects inserted`);

        // Insertar blogs
        /*console.log('📝 Inserting blogs...');
        const blogsResult = await db.collection('blogs').insertMany(sampleBlogs);
        console.log(`✅ ${blogsResult.insertedCount} blogs inserted`);*/

        console.log('\n🎉 Database seeded successfully!');
        console.log('\n📊 Summary:');
        console.log(`   Projects: ${projectsResult.insertedCount}`);
        // console.log(`   Blogs: ${blogsResult.insertedCount}`);
        console.log(`   Featured Projects: ${projectsMockData.filter(p => p.featured).length}`);
        // console.log(`   Published Blogs: ${sampleBlogs.filter(b => b.published).length}`);

        process.exit(0);
    } catch (error) {
        console.error('❌ Error seeding database:', error);
        process.exit(1);
    }
}

// Ejecutar seeding
seedDatabase();
console.log(projectsMockData.length);
