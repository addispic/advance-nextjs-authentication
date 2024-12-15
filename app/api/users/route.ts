import { NextResponse, type NextRequest } from "next/server";

// get all users
export async function GET() {
  return NextResponse.json({ message: "Get All Users" }, { status: 200 });
}

// add new user
export async function POST(req: NextRequest) {
    const formData = await req.formData() 
    console.log({username: formData.get("username")})
  return NextResponse.json({ message: "Add New User" }, { status: 200 });
}
