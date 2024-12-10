import { NextResponse, NextRequest } from "next/server";


// get username
export async function GET(request: NextRequest) {
  
  return NextResponse.json({ message: "Get Username Over Here" }, { status: 200 });
}
