import { NextRequest, NextResponse } from "next/server";

// lib
import { updateSession } from "./app/lib/session";

export async function middleware(request: NextRequest) {
  if (!request.cookies.get("session")?.value) {
    return NextResponse.redirect(new URL("/login", request.url));
  } else {
    return await updateSession(request);
  }
}

// config
export const config = {
  matcher: ["/", "/dashboard/:path*"],
};
