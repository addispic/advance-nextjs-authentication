import { NextResponse, type NextRequest } from "next/server";

// db
import dbConnection from "@/lib/dbConnection";

// models
import userModel from "@/lib/models/user.model";

// delete user
export async function DELETE(req: NextRequest) {
    const _id = new URL(req.url).pathname.split("/").pop()
    try{
        await dbConnection()
        await userModel.findByIdAndDelete(_id)
        return NextResponse.json({success: true},{status: 200})
    }catch(err){
        console.log(err)
        return NextResponse.json({success: false},{status: 400})
    }
}