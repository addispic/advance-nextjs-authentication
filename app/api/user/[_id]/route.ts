import { NextRequest, NextResponse } from "next/server";

// db
import { dbConnectionHandler } from "@/app/db/db-connection";

// model
import UserModel from "@/app/models/user-model";

export async function GET(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const _id = pathname.split("/").pop();
  try {
    await dbConnectionHandler()
    const isUserExist = await UserModel.findById(_id)
    if(!isUserExist){
      return NextResponse.json({error: 'user note exits'},{status: 400})
    }
    return NextResponse.json({username: isUserExist.username,email: isUserExist.email},{status: 200})
  } catch (err) {
    return NextResponse.json({error: 'get user error'},{status: 400})
  }
}
