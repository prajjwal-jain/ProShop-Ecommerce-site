import express from 'express';
import dotenv from 'dotenv'
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js'
import bodyparse from "body-parser"
import categoryRoutes from './routes/categoryRoutess.js'
import productRoutes from "./routes/productRoutes.js"
import cors from "cors";
dotenv.config();
connectDB();
const app=express()
app.use(cors());
app.use(express.json())
app.use(bodyparse.json());
app.use(bodyparse.urlencoded({extended: true}));
app.use(morgan('dev'))
app.use("/api/v1/auth",authRoutes);
app.use('/api/v1/category',categoryRoutes);
app.use('/api/v1/product',productRoutes);
const PORT=process.env.PORT||8080;
app.get("/",(req,res)=>{
    res.send("hemlo");
})
app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
})