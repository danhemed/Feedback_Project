import { getDB } from "../db/connect.js";
import { ObjectId } from "mongodb";

export async function insertFeedback(feedback) {
    feedback.timestamp = new Date();
    const db = getDB();
    return db.collection("feedback").insertOne(feedback)
};

export async function getFeedbacks() {
    const db = getDB();
    return db.collection("feedback").find().toArray();
};

export async function deleteFeedback(id) {
    const db = getDB();
    return db.collection("feedback").deleteOne({ _id: new ObjectId(id) });
};