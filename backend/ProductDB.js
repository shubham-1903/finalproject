import dotenv from 'dotenv'
import { connectDB } from './db/connect.js';
import { product } from './models/product.js';
import ProductJson from './products.json' assert {type: 'json'};
dotenv.config()
const start = async ( ) =>{
    try {
        await connectDB(process.env.MONGODB_URL);
        product.create(ProductJson)
        console.log("success")
    } catch (error) {
        console.log(error)
    }
}
start()