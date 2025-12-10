import { Collection, ObjectId } from 'mongodb';
import Database from '../config/db/connection.js';
import { Blog, CreateBlogDTO, UpdateBlogDTO } from '../types/models.js';

export class BlogService {
  private getCollection(): Collection<Blog> {
    const db = Database.getInstance().getDb();
    return db.collection<Blog>('blogs');
  }

  async getAllBlogs(): Promise<Blog[]> {
    const collection = this.getCollection();
    return await collection.find().sort({ createdAt: -1 }).toArray();
  }

  async getPublishedBlogs(): Promise<Blog[]> {
    const collection = this.getCollection();
    return await collection
      .find({ published: true })
      .sort({ createdAt: -1 })
      .toArray();
  }

  async getBlogById(id: string): Promise<Blog | null> {
    if (!ObjectId.isValid(id)) {
      return null;
    }
    
    const collection = this.getCollection();
    const blog = await collection.findOne({ _id: new ObjectId(id) });
    
    // Incrementar vistas
    if (blog) {
      await collection.updateOne(
        { _id: new ObjectId(id) },
        { $inc: { views: 1 } }
      );
    }
    
    return blog;
  }

  async createBlog(blogData: CreateBlogDTO): Promise<Blog> {
    const collection = this.getCollection();
    const newBlog: Blog = {
      ...blogData,
      views: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const result = await collection.insertOne(newBlog);
    return { ...newBlog, _id: result.insertedId };
  }

  async updateBlog(id: string, updateData: UpdateBlogDTO): Promise<Blog | null> {
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

  async deleteBlog(id: string): Promise<boolean> {
    if (!ObjectId.isValid(id)) {
      return false;
    }

    const collection = this.getCollection();
    const result = await collection.deleteOne({ _id: new ObjectId(id) });
    return result.deletedCount > 0;
  }

  async searchBlogs(query: string): Promise<Blog[]> {
    const collection = this.getCollection();
    return await collection
      .find({
        $or: [
          { title: { $regex: query, $options: 'i' } },
          { content: { $regex: query, $options: 'i' } },
          { tags: { $in: [new RegExp(query, 'i')] } }
        ]
      })
      .toArray();
  }
}