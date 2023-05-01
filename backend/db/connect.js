import mongoose from "mongoose";

export const connectDB = (URL) => {
    console.log("connected to db ..")
    return mongoose.connect(URL,{
        useNewUrlParser:true,
        // useUnifiedToplogy:true,
    })
}

