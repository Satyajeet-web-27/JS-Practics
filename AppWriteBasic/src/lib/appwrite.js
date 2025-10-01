import { Client, Account, TablesDB } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://nyc.cloud.appwrite.io/v1")
  .setProject("68dd4f020038e8b82058");

export const account = new Account(client);
export const tablesDB = new TablesDB(client);
