import mongoose from "mongoose";

// db connection
export  default async function dbConnection(){
    if(mongoose.connections[0].readyState) return 
    try{
        const mongodbURI = process.env.MONGODB_URI || ""
        await mongoose.connect(mongodbURI) 
        console.log("db connected successfully")
    }catch(err){
        console.log(err)
        console.log('db connection failed')
        process.exit(-1)
    }
}