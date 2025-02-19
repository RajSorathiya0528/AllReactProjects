import conf from '../conf/conf.js'
import {Client, Account, ID} from 'appwrite';

export class AuthService {
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.Appwrite_URL)
            .setProject(conf.Appwrite_Project_Id)
        this.account = new Account(this.client)
    }

    async createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if(userAccount){
                return this.login({email, password});
            }
            else{
                return userAccount;
            }
        } catch (error) {
            throw new Error("Error while creating account");
        }
    }

    async login({email, password}){
        try {
            return await this.account.createEmailPasswordSession(email, password)
        }catch(error){
            throw new Error("Error while Logging user in");
        }
    }

    async getCurrentUser(){
        try{
            return await this.account.get();
        }catch(error){
            throw error;
        }
        return null;
    }

    async logout(){
        try{
            return await this.account.deleteSession();
        }
        catch(error){
            throw new Error("Error while logging out");
        }
    }
}

const authService = new AuthService();

export default authService;