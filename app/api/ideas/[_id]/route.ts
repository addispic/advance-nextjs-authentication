import { NextResponse, type NextRequest } from "next/server";

// db
import dbConnection from "@/lib/dbConnection";

// models
import ideaModel from "@/lib/models/ideaModel";

// session
import { getLoggedInUserId } from "@/lib/session";

// delete idea
export async function DELETE(
  req: NextRequest,
  { params }: { params: { _id: string } }
) {
  const { _id } = await params;
  try {
    if (!(await getLoggedInUserId())) {
      return NextResponse.json({ error: "unauthorized" });
    }
    await dbConnection();
    const isIdeaExist = await ideaModel.findById(_id);
    if (isIdeaExist.author.toString() !== (await getLoggedInUserId())) {
      return NextResponse.json({ error: "unauthorized to delete idea" });
    }
    await ideaModel.findByIdAndDelete(_id);
    return NextResponse.json(
      { success: true },
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "delete idea error" }, { status: 400 });
  }
}
