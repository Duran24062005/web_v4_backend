import { ObjectId } from 'mongodb';

// Tipos base
export interface BaseDocument {
  _id?: ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

// Modelo de Blog
export interface Blog extends BaseDocument {
  title: string;
  content: string;
  excerpt: string;
  author: string;
  tags: string[];
  imageUrl?: string;
  published: boolean;
  views: number;
}

// Modelo de Project
export interface Project extends BaseDocument {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  demoUrl?: string;
  repoUrl?: string;
  featured: boolean;
}

// DTOs para crear/actualizar
export type CreateBlogDTO = Omit<Blog, '_id' | 'createdAt' | 'updatedAt' | 'views'>;
export type UpdateBlogDTO = Partial<CreateBlogDTO>;

export type CreateProjectDTO = Omit<Project, '_id' | 'createdAt' | 'updatedAt'>;
export type UpdateProjectDTO = Partial<CreateProjectDTO>;

// Tipos de respuesta
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}