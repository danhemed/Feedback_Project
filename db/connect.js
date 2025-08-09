import { config } from "dotenv";
import { MongoClient } from "mongodb";
config();

const client = new MongoClient(process.env.MONGODB);

let db;

export async function connect() {
    try {
        if (db) {
            return db;
        } else {         
            await client.connect();
            db = client.db('feedbacks');
            console.log("Connected to MongoDB");
            return db;
        }
    } catch (err) {
        console.log(err);
    }
}

export function getDB() {
    if (!db) {
        throw new Error("Database not connected. Call connectDB first.");
    }
    return db;
}