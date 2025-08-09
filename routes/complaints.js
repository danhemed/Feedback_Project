import { insertFeedbackCtrl, getFeedbacksCtrl, enterAdmin } from "../controllers/complaintsController.js";
import express from "express";

const router = express.Router();

router.get('/showAllComplaints', getFeedbacksCtrl);

router.post('/admin', enterAdmin);

router.post('/submit', insertFeedbackCtrl);

export default router;