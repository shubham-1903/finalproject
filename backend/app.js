
import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import productsRouter from './routes/products.js';
import { connectDB } from './db/connect.js';
dotenv.config()
const app = express();
const port = 5500
app.use(bodyParser.json());

// mongoose.connect('mongodb://localhost:27017/webinardb').then(()=>{
//   console.log('connected to db..');
// }).catch(err=>console.log(err))

app.get('/', (req, res)=>{
  res.send("started...")
})
app.use("/api/products",productsRouter);
connectDB(process.env.MONGODB_URL);
app.listen(port, () => {
  console.log(`Server started on port`);
});