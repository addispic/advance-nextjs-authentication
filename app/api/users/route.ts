import { NextRequest, NextResponse } from "next/server";

// db
import dbConnection from "@/app/db/db.connection";

// models
// users
import UsersModel from "@/app/models/users.model";

// get all users
export async function GET() {
  try{
    await dbConnection()
    const allUsers = await UsersModel.find().sort({createdAt: -1})
    return NextResponse.json({allUsers},{status: 200})
  }catch(err){
    return NextResponse.json({error: 'fail'},{status: 400})
  }
}

// add new user
export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const username = formData.get("username");
  try {
    await dbConnection();
    const newUser = await UsersModel.create({ username });
    return NextResponse.json({ newUser }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "fail" }, { status: 400 });
  }
}
