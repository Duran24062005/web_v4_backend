import { Collection, ObjectId } from 'mongodb';
import Database from '../config/db/connection';
import { Blog, CreateBlogDTO, UpdateBlogDTO } from '../types/models';

export class BlogService {
  private collection: Collection<Blog>;

  constructor() {
    const db = Database.getInstance().getDb();
    this.collection = db.collection<Blog>('blogs');
  }

  async getAllBlogs(): Promise<Blog[]> {
    return await this.collection.find().sort({ createdAt: -1 }).toArray();
  }

  async getPublishedBlogs(): Promise<Blog[]> {
    return await this.collection
      .find({ published: true })
      .sort({ createdAt: -1 })
      .toArray();
  }

  async getBlogById(id: string): Promise<Blog | null> {
    if (!ObjectId.isValid(id)) {
      return null;
    }
    
    const blog = await this.collection.findOne({ _id: new ObjectId(id) });
    
    // Incrementar vistas
    if (blog) {
      await this.collection.updateOne(
        { _id: new ObjectId(id) },
        { $inc: { views: 1 } }
      );
    }
    
    return blog;
  }

  async createBlog(blogData: CreateBlogDTO): Promise<Blog> {
    const newBlog: Blog = {
      ...blogData,
      views: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const result = await this.collection.insertOne(newBlog);
    return { ...newBlog, _id: result.insertedId };
  }

  async updateBlog(id: string, updateData: UpdateBlogDTO): Promise<Blog | null> {
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

  async deleteBlog(id: string): Promise<boolean> {
    if (!ObjectId.isValid(id)) {
      return false;
    }

    const result = await this.collection.deleteOne({ _id: new ObjectId(id) });
    return result.deletedCount > 0;
  }

  async searchBlogs(query: string): Promise<Blog[]> {
    return await this.collection
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