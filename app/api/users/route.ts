import { NextResponse, type NextRequest } from "next/server";

// db
import dbConnection from "@/lib/dbConnection";
// models
import userModel from "@/lib/models/user.model";

// get all user
export async function GET(){
    try{
        await dbConnection()
        const users = await userModel.find().sort({createdAt: -1}).select({_id: 1,username: 1,createdAt: 1})
        return NextResponse.json({success: true,users},{status: 200})
    }catch(err){
        console.log(err)
        return NextResponse.json({success: false},{status: 400})
    }
}
// add new user
export async function POST(req: NextRequest) {
  const formData = await req.formData() 
  try{
    await dbConnection()
    await userModel.create({username: formData.get("username")})
    return NextResponse.json({success: true},{status: 200})
  }catch(err){
    console.log(err)
    return NextResponse.json({success: false},{status: 400})
  }
}
