import mongoose from "mongoose";

const postModel = new mongoose.Schema(
  {
    text: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Posts || mongoose.model("Posts", postModel);
