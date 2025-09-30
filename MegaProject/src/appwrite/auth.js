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
      const userAccount = this.client.create({ ID, email, password, name });
    } catch (error) {}
  }

  async login() {}

  async getCurrentUSer() {}

  async logOut() {}
}

const AuthService = new AuthService();

export default AuthService;
