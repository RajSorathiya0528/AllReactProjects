import {Account, Client} from 'appwrite';
import conf from '../conf/conf'

const client = new Client()
    .setEndpoint(conf.appwriteURL)
    .setProject(conf.appwriteProjectID);
const account = new Account(client);

export {client, account};