import express from "express";
import { 
    Blogs,
    filterById,
    createNewBlog,
    updatedBlog,
    deleteBlog
 } from "../controllers/blogs.controller.js";


const blogs_router = express.Router();

// All blogs
blogs_router.get("/all", Blogs);

// Blog by ID
blogs_router.get("/:id", filterById);

// Create new blog
blogs_router.post("/", createNewBlog);

// Update blog
blogs_router.put("/:id", updatedBlog);

// Delete blog
blogs_router.delete("/:id", deleteBlog);

export default blogs_router;