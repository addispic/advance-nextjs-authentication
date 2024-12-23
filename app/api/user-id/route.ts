import { NextResponse } from "next/server";

// sessions
import { getLoggedInUserId } from "@/lib/session";

export async function GET() {
  return NextResponse.json(await getLoggedInUserId());
}
