import mongoose from "mongoose";

// db connection handler
export const dbConnectionHandler = async () => {
    if(mongoose.connections[0].readyState) return
    try{
        const mongodbURI = process.env.MONGODB_URI || ""
        await mongoose.connect(mongodbURI);
        console.log("db connected successfully")
    }catch(err){
        console.log(err)
        process.exit(-1)
    }
}