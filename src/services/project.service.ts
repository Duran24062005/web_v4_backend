import { Collection, ObjectId } from 'mongodb';
import Database from '../config/db/connection.js';
import { Project, CreateProjectDTO, UpdateProjectDTO } from '../types/models';

export class ProjectService {
  private collection: Collection<Project>;

  constructor() {
    const db = Database.getInstance().getDb();
    this.collection = db.collection<Project>('projects');
  }

  async getAllProjects(): Promise<Project[]> {
    return await this.collection.find().sort({ createdAt: -1 }).toArray();
  }

  async getFeaturedProjects(): Promise<Project[]> {
    return await this.collection
      .find({ featured: true })
      .sort({ createdAt: -1 })
      .toArray();
  }

  async getProjectById(id: string): Promise<Project | null> {
    if (!ObjectId.isValid(id)) {
      return null;
    }
    return await this.collection.findOne({ _id: new ObjectId(id) });
  }

  async createProject(projectData: CreateProjectDTO): Promise<Project> {
    const newProject: Project = {
      ...projectData,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const result = await this.collection.insertOne(newProject);
    return { ...newProject, _id: result.insertedId };
  }

  async updateProject(id: string, updateData: UpdateProjectDTO): Promise<Project | null> {
    if (!ObjectId.isValid(id)) {
      return null;
    }

    const result = await this.collection.findOneAndUpdate(
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

    const result = await this.collection.deleteOne({ _id: new ObjectId(id) });
    return result.deletedCount > 0;
  }

  async getProjectsByTechnology(technology: string): Promise<Project[]> {
    return await this.collection
      .find({ technologies: { $in: [new RegExp(technology, 'i')] } })
      .toArray();
  }
}