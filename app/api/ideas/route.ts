import { NextRequest, NextResponse } from "next/server";
// db
import dbConnection from "@/lib/dbConnection";
// models
import ideaModel from "@/lib/models/ideaModel";
// sessions
import { getLoggedInUserId } from "@/lib/session";
// get all ideas
export async function GET() {
  try {
    await dbConnection();
    return NextResponse.json(await ideaModel.find().sort({ createdAt: -1 }), {
      status: 200,
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "get all ideas error" }, { status: 400 });
  }
}

// add new idea
export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const session = request.cookies.get("idea-share-auth-session")?.value;
    if (!session) {
      return NextResponse.json({ error: "unauthorized" }, { status: 401 });
    }
    const author = await getLoggedInUserId();
    if (!author) {
      return NextResponse.json({ error: "unauthorized" }, { status: 401 });
    }
    await ideaModel.create({ author, text: formData.get("text") });
    return NextResponse.json({ success: true });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "add new idea error" }, { status: 4001 });
  }
}
