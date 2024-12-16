import mongoose from "mongoose";

// user schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    }
},{
    timestamps: true
})

// exports
export default mongoose.models.User || mongoose.model("User",userSchema)