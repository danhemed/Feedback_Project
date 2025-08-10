import { insertFeedback, getFeedbacks, deleteFeedback } from "../models/complaint.model.js";
import { checkAdmin } from "../middleware/admin.middleware.js";

export const getFeedbacksCtrl = async (req, res) => {
    try {
        res.json(await getFeedbacks());
    } catch (err) {
        res.status(500).json({ error: `from get feedbacks server ${err.message}` })
    }
}

export const enterAdmin = async (req, res) => {
    try {
        const enterAdmin = await checkAdmin(req);
        if (enterAdmin) {
            res.status(200).redirect('/system.html');
        } else {
            res.status(500).send('!שם המשתמש או הסיסמה שגויים');
        }
    } catch (err) {
        res.status(500).json({ error: `from enter admin server ${err.message}` })
    }
}

export const insertFeedbackCtrl = async (req, res) => {
    console.log(typeof req.body);
    try {
        await insertFeedback({ ...req.body });
        res.status(201).json({message: "complaints send"});
    } catch (err) {
        res.status(500).json({ error: `from insert feedback server ${err.message}` });
    }
}

export const deleteFeedbackCtrl = async (req, res) => {
    try {
        await deleteFeedback(req.body.delete);
        res.json({message: "delete successfully!"});
    } catch (err) {
        res.status(500).json({ error: `from delete feedbacks server ${err.message}` });
    }
}