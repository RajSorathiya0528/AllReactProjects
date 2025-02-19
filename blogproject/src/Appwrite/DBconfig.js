import conf from '../conf/conf.js';
import {Client, ID, Databases, Query} from 'appwrite';

export class DBService{
    client = new Client();
    Databases;
    constructor(){
        this.client
            .setEndpoint(conf.Appwrite_URL)
            .setProject(conf.Appwrite_Project_Id)
        this.Databases = new Databases(this.client);
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.Databases.createDocument(
                conf.Appwrite_Project_Id,
                conf.Appwrite_Collection_Id,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error);
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            return await this.Databases.updateDocument(
                conf.Appwrite_Database_Id,
                conf.Appwrite_Collection_Id,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            console.log("Appwrite service :: updatePost :: error", error);
        }
    }

    async getPost(slug){
        try {
            return await this.Databases.getDocument(
                conf.Appwrite_Database_Id,
                conf.Appwrite_Collection_Id,
                slug
            )
        } catch (error) {
            console.log("Appwrite service :: getPost :: error", error);
            return false;
        }
    }

    async deletePost(slug){
        try {
            await this.Databases.deleteDocument(
                conf.Appwrite_Database_Id,
                conf.Appwrite_Collection_Id,
                slug
            )
            return true;
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error", error);
            return false;
        }
    }

    async getPosts(queries = [
        Query.equal("status", "active")
    ]){
        try {
            return await this.Databases.listDocuments(
                conf.Appwrite_Database_Id,
                conf.Appwrite_Collection_Id,
                queries
            )
        } catch (error){
            console.log("Appwrite service :: getPosts :: error ", error)
            return false 
        }
    }
}

export const dbService = new DBService();

export default dbService;