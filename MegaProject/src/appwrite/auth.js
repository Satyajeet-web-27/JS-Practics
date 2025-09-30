import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client.setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createUser({ email, password, name }) {
    try {
      const userAccount = await this.client.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        // call login
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await this.client.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUSer() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite serive :: getCurrentUser :: error", error);
    }
    return null;
  }

  async logOut() {
    try {
      return await this.account.deleteSession();
    } catch (error) {
      console.log("Appwrite service :: logout :: error", error);
    }
  }
}

const AuthService = new AuthService();

export default AuthService;
