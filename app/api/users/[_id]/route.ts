import { NextResponse, type NextRequest } from "next/server";

// db
import dbConnection from "@/lib/db/dbConnection";

// models
import userModel from "@/lib/models/user.model";

// get single user
export async function GET(req: NextRequest) {
  const _id = new URL(req.url).pathname.split("/").pop();
  try{
    await dbConnection()
    const isUserExist = await userModel.findById(_id).select({_id: 1,username: 1,email: 1,createdAt: 1})
    if(!isUserExist){
        return NextResponse.json({error: 'user not exist'},{status: 400})
    }
    return NextResponse.json({isUserExist},{status: 200})
  }catch(err){
    return NextResponse.json({error: "get single user error"},{status: 400})
  }
}
