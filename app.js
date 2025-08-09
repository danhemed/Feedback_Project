import express from "express";
import router from "./routes/complaints.js";
import { config } from "dotenv";
config();

const port = process.env.PORT || 3005;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public"));

app.use('/feedback', router);

app.listen(port, () => {
    console.log(`server run on http://localhost:${port}`);
});