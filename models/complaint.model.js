import { getDB } from "../db/connect.js";

export async function insertFeedback(feedback) {
    feedback.timestamp = new Date();
    const db = getDB();
    return db.collection("feedback").insertOne(feedback)
};

export async function getFeedbacks() {
    const db = getDB();
    return db.collection("feedback").find().toArray();
};