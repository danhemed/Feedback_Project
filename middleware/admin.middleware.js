import { config } from "dotenv";
config();

const username = process.env.USER;
const password = process.env.PASS;

export async function checkAdmin(req) {
    const usernameReq = req.body.username;
    const passwordReq = req.body.password;

    if (username == usernameReq && password == passwordReq) {
        return true;
    } else {
        return false;
    }
}

// export async function checkID(req) {
//     const 
// }