import { NextResponse, type NextRequest } from "next/server";
import { SignJWT, jwtVerify, JWTPayload } from "jose";
import { cookies } from "next/headers";

// secrete key
const SECRET_KEY = process.env.SECRET_KEY || "";
// encoded key
const ENCODED_KEY = new TextEncoder().encode(SECRET_KEY);

// encrypt
export async function encrypt(payload: JWTPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1h from now")
    .sign(ENCODED_KEY);
}

// decrypt
export async function decrypt(session: string) {
  try {
    const { payload } = await jwtVerify(session, ENCODED_KEY, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (err) {
    console.log(err);
    console.log("session verification failed");
  }
}

// update session
export async function updateSession(request: NextRequest) {
  const session = request.cookies.get("blog-i-auth-session")?.value;
  if (!session) return;
  const parsed = await decrypt(session);
  const response = NextResponse.next();
  response.cookies.set({
    name: "blog-i-auth-session",
    value: await encrypt({ _id: parsed?._id }),
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    expires: new Date(Date.now() + 60 * 60 * 1000),
  });
  return response;
}

// get payload
export async function getPayload(){
  const session = (await cookies()).get("blog-i-auth-session")?.value 
  if(!session) return 
  return (await decrypt(session))?._id
}
