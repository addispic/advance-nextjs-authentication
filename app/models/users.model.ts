import mongoose from "mongoose";


// users schema
const usersSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    }
},{
    timestamps: true
})

// exports
export default mongoose.models.Users || mongoose.model("Users",usersSchema)