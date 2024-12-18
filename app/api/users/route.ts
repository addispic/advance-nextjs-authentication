import { NextResponse, type NextRequest } from "next/server";

// db
import dbConnection from "@/lib/db/dbConnection";
// models
import userModel from "@/lib/models/user.model";

// get all users
export async function GET() {
  try {
    await dbConnection();
    const users = await userModel.find().select({ _id: 1 });
    return NextResponse.json({ users }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: "get all users error" }, { status: 400 });
  }
}
