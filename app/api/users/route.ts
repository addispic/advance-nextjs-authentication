import { NextRequest, NextResponse } from "next/server";

// db
import dbConnection from "@/lib/db/dbConnection";
// models
import userModel from "@/lib/models/userModel";

// get all users
export async function GET() {
  try {
    await dbConnection();
    const users = await userModel.find().sort({ createdAt: -1 });
    return NextResponse.json(users, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: "get all users error" }, { status: 400 });
  }
}

// add new user
export async function POST(req: NextRequest) {
  try {
    const data = await req.formData();
    console.log(data.get("last_name"));
    const newUser = await userModel.create({
      first_name: data.get("first_name"),
      last_name: data.get("last_name"),
      email: data.get("email"),
      profession: data.get("profession"),
      nation: data.get("nation"),
      language: data.get("language"),
    });
    return NextResponse.json(newUser, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "add new user error" }, { status: 400 });
  }
}
