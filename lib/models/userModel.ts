import mongoose from "mongoose";

// user schema
const userSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// exports
export default mongoose.models.Users || mongoose.model("Users", userSchema);
