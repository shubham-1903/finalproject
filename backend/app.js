
import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import productsRouter from './routes/products.js';
import { connectDB } from './db/connect.js';
dotenv.config({path: "./vars/.env"})
const app = express();

app.use(bodyParser.json());
app.use(cors())
// mongoose.connect('mongodb://localhost:27017/webinardb').then(()=>{
//   console.log('connected to db..');
// }).catch(err=>console.log(err))

app.get('/', (req, res)=>{
  res.send("started...")
})
app.use("/api/products",productsRouter);
connectDB(process.env.MONGODB_URL);
app.listen(process.env.PORT, () => {
  console.log(`Server started on port`);
});