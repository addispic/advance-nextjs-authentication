import mongoose from "mongoose";

// idea schema
const ideaSchema = new mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
    },
    text: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// exports
export default mongoose.models.Ideas || mongoose.model("Ideas", ideaSchema);
