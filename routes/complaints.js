import { insertFeedbackCtrl, getFeedbacksCtrl, enterAdmin, deleteFeedbackCtrl } from "../controllers/complaintsController.js";
import express from "express";

const router = express.Router();

router.get('/showAllComplaints', getFeedbacksCtrl);

router.post('/admin', enterAdmin);

router.post('/submit', insertFeedbackCtrl);

router.post('/delete', deleteFeedbackCtrl);

export default router;