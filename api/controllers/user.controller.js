import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../../backend/utils/error.js";
export const test=(req,res)=>{
    res.json({
        message: 'Its fucking works',
    });
};
