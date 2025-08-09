import { insertFeedback, getFeedbacks } from "../models/complaint.model.js";

export const getFeedbacksCtrl = async (req, res) => {
    try {
        res.json(await getFeedbacks)
    } catch (err) {
        res.status(500).json({ error: `from get feedbacks server ${err.message}` })
    }
}

export const insertFeedbackCtrl = async (req, res) => {
    console.log(req.body);
    try {
        await insertFeedback({ ...req.body });
        res.status(201).json({message: "complaints send"});
    } catch (err) {
        res.status(500).json({ error: `from insert feedback server ${err.message}` });
    }
}