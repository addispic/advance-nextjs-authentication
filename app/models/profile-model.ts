import mongoose from "mongoose";

// profile schema
const profileSchema = new mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    image: {
        type: String,
        required: true,
    }
},{
    timestamps: true
})


// modules
export default mongoose.models.Profiles || mongoose.model("Profiles",profileSchema)