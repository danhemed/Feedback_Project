import { insertFeedbackCtrl, getFeedbacksCtrl } from "../controllers/complaintsController.js";
import express from "express";

const router = express.Router();

router.get('/admin', getFeedbacksCtrl);

router.post('/submit', insertFeedbackCtrl);

export default router;