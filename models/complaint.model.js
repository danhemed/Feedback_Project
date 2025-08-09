import { connect } from "../db/connect.js";

export async function insertFeedback(feedback) {
    feedback.timestamp = new Date();
    const db = await connect();
    return db.collection("feedback").insertOne(feedback)
};

export async function getFeedbacks() {
    const db = await connect();
    return db.collection("feedback").find().toArray();
};