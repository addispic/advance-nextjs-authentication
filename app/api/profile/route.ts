import { decrypt } from "@/app/lib/session";
import { NextRequest, NextResponse } from "next/server";

// db
import { dbConnectionHandler } from "@/app/db/db-connection";

// model
import ProfileModel from "@/app/models/profile-model";

// get all profile
export async function GET(request: NextRequest) {
  return NextResponse.json({ message: "GET ALL PROFILEs" });
}

// add new profile
export async function POST(request: NextRequest) {
  const session = request.cookies.get("session")?.value;
  if (!session) {
    return NextResponse.json({ error: "unauthorized" });
  }
  const payload = await decrypt(session);
  if (!payload?._id) {
    return NextResponse.json({ error: "unauthorized" });
  }
  const { url } = await request.json();
  await dbConnectionHandler();
  const newProfile = await ProfileModel.create({
    image: url,
    author: payload?._id,
  });

  if (!newProfile) {
    return NextResponse.json({ error: "upload profile error" });
  }

  return NextResponse.json({ message: "successful profile upload" });
}
