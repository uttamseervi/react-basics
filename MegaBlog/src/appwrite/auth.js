import conf from "../conf/conf.js"
import { Client, Account, ID } from "appwrite"

/*
const client = new Client()
    .setEndpoint(conf.appwriteUrl)
    .setProject(conf.appwriteProjectId)

const account = new Account(client);

const user = await account.create(
    ID.unique()
    "email"
)

*/

// optimized code 
export class AuthService {
    client = new Client();
    account;
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.account = new Account(this.client)

    }
    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            if (userAccount) {
                this.login({ email, password })
            }
            else {
                return userAccount;
            }
        } catch (error) {
            throw error
        }
    }
    async login({ email, password }) {
        try {
            return await this.account.createEmailSession(email, password)
        } catch (error) {
            throw error
        }
    }
    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("AppWrite service :: getCurrentUser :: error", error);
        }
        return null;
    }
    async logout() {
        try {
            // here the current is passed to represent the id of the current user
            this.account.deleteSessions('current');
        } catch (error) {
            // console.log("logout :: error:: ", error);
            console.log("AppWrite service :: logoutUser :: error", error);
        }
    }
}
const authService = new AuthService();

export default authService;