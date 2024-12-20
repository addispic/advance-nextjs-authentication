import { NextRequest, NextResponse } from "next/server";

// db
import dbConnection from "@/lib/db/dbConnection";
// models
import postModel from "@/lib/models/postModel";

// get all posts
export async function GET() {
  try {
    await dbConnection();
    const posts = await postModel.find().sort({ createdAt: -1 });
    return NextResponse.json(posts, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "get posts error" }, { status: 400 });
  }
}

// add new post
export async function POST(req: NextRequest) {
  try {
    const { text } = await req.json();
    await dbConnection();
    await postModel.create({ text });
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "add new post error" }, { status: 400 });
  }
}
