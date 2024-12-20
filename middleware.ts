import { type NextRequest } from "next/server";

// session
import { updateSession } from "./lib/session";

// middleware
export default async function middleware(request: NextRequest) {
  return await updateSession(request);
}
