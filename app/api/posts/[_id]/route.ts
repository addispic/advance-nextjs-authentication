import { NextResponse, type NextRequest } from "next/server";

// db
import dbConnection from "@/lib/db/dbConnection";
// model
import postModel from "@/lib/models/postModel";

// delete post
export async function DELETE(
  req: NextRequest,
  { params }: { params: { _id: string } }
) {
  const { _id } = params;
  try {
    await dbConnection();
    await postModel.findByIdAndDelete(_id);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "delete post error" }, { status: 400 });
  }
}
