import mongoose from "mongoose";

// db connection handler
export default async function dbConnection() {
  if (mongoose.connections[0].readyState) return;
  try {
    const mongodb_uri = process.env.MONGODB_URI || "";
    await mongoose.connect(mongodb_uri);
    console.log("db connected successfully");
  } catch (err) {
    console.log("db connection failed");
    process.exit(-1);
  }
}
