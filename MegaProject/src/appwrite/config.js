import conf from "../conf/conf.js";
import { Client, ID, TablesDB } from "appwrite";

export class Service {
  client = new Client();
  database;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.database.TablesDB(this.client);
  }

  async createPost({ title, rowId, content, featuredImage, status, userId }) {
    try {
      return await this.database.createRow({
        databseId: conf.appwriteDatabaseId,
        tableId: conf.appwriteCollectionId,
        rowId: ID.unique(),
        data: {
          title,
          content,
          featuredImage,
          status,
          userId,
        },
      });
    } catch (err) {
      console.log("Appwrite service :: createPost :: error", err);
    }
  }

  async updatePost() {
    try {
      return await this.database.updateRow(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        rowId,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (err) {
      console.log("Appwrite service :: updatePost :: error", err);
    }
  }
}
const service = new Service();
export default service;
