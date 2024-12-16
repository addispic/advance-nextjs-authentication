import { NextResponse, type NextRequest } from "next/server";
// db
import dbConnection from "@/app/db/db.connection";
// models
// user model
import UsersModel from "@/app/models/users.model";
// delete user
export async function DELETE(req: NextRequest) {
  const { pathname } = new URL(req.url);
  const _id = pathname.split("/").pop();
  try {
    await dbConnection();
    await UsersModel.findByIdAndDelete(_id);
    return NextResponse.json(
      { message: "user deleted successfully" },
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "delete user error" }, { status: 400 });
  }
}
