import { insertFeedback, getFeedbacks } from "../models/complaint.model.js";
import { checkAdmin } from "../models/admin.model.js";

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
    try {
        await insertFeedback({ ...req.body });
        res.status(201).json({message: "complaints send"});
    } catch (err) {
        res.status(500).json({ error: `from insert feedback server ${err.message}` });
    }
}