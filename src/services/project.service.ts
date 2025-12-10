import { Collection, ObjectId } from 'mongodb';
import Database from '../config/db/connection.js';
import { Project, CreateProjectDTO, UpdateProjectDTO } from '../types/models.js';

export class ProjectService {
  private getCollection(): Collection<Project> {
    const db = Database.getInstance().getDb();
    return db.collection<Project>('projects');
  }

  async getAllProjects(): Promise<Project[]> {
    const collection = this.getCollection();
    return await collection.find().sort({ createdAt: -1 }).toArray();
  }

  async getFeaturedProjects(): Promise<Project[]> {
    const collection = this.getCollection();
    return await collection
      .find({ featured: true })
      .sort({ createdAt: -1 })
      .toArray();
  }

  async getProjectById(id: string): Promise<Project | null> {
    if (!ObjectId.isValid(id)) {
      return null;
    }
    const collection = this.getCollection();
    return await collection.findOne({ _id: new ObjectId(id) });
  }

  async createProject(projectData: CreateProjectDTO): Promise<Project> {
    const collection = this.getCollection();
    const newProject: Project = {
      ...projectData,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const result = await collection.insertOne(newProject);
    return { ...newProject, _id: result.insertedId };
  }

  async updateProject(id: string, updateData: UpdateProjectDTO): Promise<Project | null> {
    if (!ObjectId.isValid(id)) {
      return null;
    }

    const collection = this.getCollection();
    const result = await collection.findOneAndUpdate(
      { _id: new ObjectId(id) },
      { 
        $set: { 
          ...updateData, 
          updatedAt: new Date() 
        } 
      },
      { returnDocument: 'after' }
    );

    return result || null;
  }

  async deleteProject(id: string): Promise<boolean> {
    if (!ObjectId.isValid(id)) {
      return false;
    }

    const collection = this.getCollection();
    const result = await collection.deleteOne({ _id: new ObjectId(id) });
    return result.deletedCount > 0;
  }

  async getProjectsByTechnology(technology: string): Promise<Project[]> {
    const collection = this.getCollection();
    return await collection
      .find({ technologies: { $in: [new RegExp(technology, 'i')] } })
      .toArray();
  }
}