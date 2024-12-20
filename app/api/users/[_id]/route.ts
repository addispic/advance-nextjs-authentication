import { NextRequest, NextResponse } from "next/server";

// db
import dbConnection from "@/lib/db/dbConnection";

// models
import userModel from "@/lib/models/userModel";

// delete user
export async function DELETE(
  req: NextRequest,
  { params }: { params: { _id: string } }
) {
  const { _id } = params;
  try {
    await dbConnection();
    await userModel.findByIdAndDelete(_id);
    return NextResponse.json({ succuss: true }, { status: 200 });
  } catch (err) {
    console.log(err);

    return NextResponse.json({ error: "delete user error" }, { status: 400 });
  }
}
