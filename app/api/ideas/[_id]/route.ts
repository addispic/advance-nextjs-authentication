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
  const { _id } = params;
  console.log("note id", _id);
  return NextResponse.json({ message: "idea delete APIs" });
}
