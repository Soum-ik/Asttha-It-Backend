require('dotenv').config();

export const MONGODB_CONNECTION = `mongodb+srv://${process.env.DBUSERNAME}:${process.env.DBPASS}@cluster0.dunrodk.mongodb.net/asttha_it_solution?retryWrites=true&w=majority&appName=Cluster0`;
export const URL_ENCODED = true;
export const PORT = 3000; 