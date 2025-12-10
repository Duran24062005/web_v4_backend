import express from "express";
import {
    Blogs,
    filterById,
    createNewBlog,
    updatedBlog,
    deleteBlog,
    getPublished
} from "../controllers/blogs.controller.js";

const blogs_router = express.Router();

// Obtener todos los blogs
blogs_router.get("/all", Blogs);

// Obtener solo blogs publicados
blogs_router.get("/published", getPublished);

// Obtener blog por ID
blogs_router.get("/:id", filterById);

// Crear nuevo blog
blogs_router.post("/", createNewBlog);

// Actualizar blog
blogs_router.put("/:id", updatedBlog);

// Eliminar blog
blogs_router.delete("/:id", deleteBlog);

export default blogs_router;