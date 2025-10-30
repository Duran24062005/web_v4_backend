import express from "express";
import { 
    Blogs,
    filterById,
    createNewBlog,
    updatedBlog,
    deleteBlog
 } from "../controllers/blogs.controller.js";


const blogs_router = express.Router();

// Example blog routes
blogs_router.get("/all", Blogs);

blogs_router.get("/:id", filterById);

blogs_router.post("/", createNewBlog);

blogs_router.put("/:id", updatedBlog);

blogs_router.delete("/:id", deleteBlog);

export default blogs_router;