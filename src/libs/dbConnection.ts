
import mongoose from "mongoose";
import { MONGODB_CONNECTION } from "../config/config";

type ConnectionObject = {
    isConnected?: number;
};

const connection: ConnectionObject = {};
export async function dbConnection(): Promise<void> {
    if (connection.isConnected) {
        console.log(" 🛢 Already connected to database");
        return;
    }

    try {
        const db = await mongoose.connect(MONGODB_CONNECTION || "");

        connection.isConnected = db.connections[0].readyState;
        console.log(`🛢   Database has been connected successfully`);
    } catch (error) {
        console.log("Database connection failed", error);

        process.exit(1);
    }
}

