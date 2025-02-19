import conf from '../conf/conf.js';
import { Client, Storage, ID } from 'appwrite';

export class StorageService{
    client = new Client();
    bucket;
    constructor(){
        this.client
            .setEndpoint(conf.Appwrite_URL)
            .setProject(conf.Appwrite_Project_Id)
        this.bucket = new Storage(this.client);
    }

    async uploadfile(file){
        try{
            return await this.bucket.createFile(
                conf.Appwrite_Bucket_Id,
                ID.unique(),
                file
            )
        } catch {
            console.log("Appwrite service :: uploadFile :: error", error);
            return false;
        }
    }

    async deleteFile(fileId){
        try{
            return await this.bucket.deleteFile(
                conf.Appwrite_Bucket_Id,
                fileId
            )
            
        } catch(error){
            console.log("Appwrite service :: deleteFile :: error", error);
            return false;
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.Appwrite_Bucket_Id,
            fileId
        )
    }

}

export const storageService = new StorageService();

export default storageService