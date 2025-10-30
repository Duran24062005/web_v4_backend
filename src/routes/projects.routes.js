import express from "express";


const projects_router = express.Router();

// Example blog routes
projects_router.get("/", (_req, res) => {
  res.send("List of blog posts");
});

projects_router.get("/:id", (req, res) => {
  res.send(`Blog projects with ID: ${req.params.id}`);
});

export default projects_router;