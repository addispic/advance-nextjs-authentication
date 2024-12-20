import mongoose from "mongoose";

export default async function dbConnection(){
    if(mongoose.connections[0].readyState) return 
    try{
        const mongoDBUri = process.env.MONGODB_URI || ""
        await mongoose.connect(mongoDBUri)
        console.log("db connected successfully")
    }catch(err){
        console.log(err)
        process.exit(-1)
    }
}