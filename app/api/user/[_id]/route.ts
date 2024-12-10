import { NextRequest, NextResponse } from "next/server";

// db
import { dbConnectionHandler } from "@/app/db/db-connection";

// model
import UserModel from "@/app/models/user-model";

export async function GET(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const _id = pathname.split("/").pop();
    console.log(_id, "++++++++")
  try {
    await dbConnectionHandler()
    return NextResponse.json({ message: "get username" });
  } catch (err) {
    return NextResponse.json({error: 'get user error'})
  }
}
