import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from '../api/routes/user.route.js';
import authRouter from '../api/routes/auth.route.js';
import cookieParser from 'cookie-parser';
dotenv.config().then
mongoose.connect(process.env.MONGO).then(()=>{console.log('Connected to DB!');}).catch((err)=>{console.log(err)});
const app=express();
app.use(express.json());
app.use(cookieParser());
app.listen(3000,() =>{
    console.log('Server is running on port 3000');
}
);
app.use("/api/user",userRouter);
app.use("/api/auth",authRouter);
app.use((err,req,res,next)=>{
    const statusCode=err.statusCode||500;
    const message=err.message||'Internal server Error';
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message,

});
});