import { SignJWT, jwtVerify, JWTPayload } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

// secret key
const secretKey = process.env.SECRET_KEY;
// encoded key
const encodedKey = new TextEncoder().encode(secretKey);

// encrypt
export async function encrypt(payload: JWTPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1h from now")
    .sign(encodedKey);
}

// decrypt
export async function decrypt(session: string) {
  const { payload } = await jwtVerify(session, encodedKey, {
    algorithms: ["HS256"],
  });
  return payload;
}

// update session
export async function updateSession(request: NextRequest) {
  const session = request.cookies.get("idea-share-auth-session")?.value;
  if (!session) return;
  const parsed = await decrypt(session);
  const response = NextResponse.next();
  response.cookies.set(
    "idea-share-auth-session",
    await encrypt({ _id: parsed?._id }),
    {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      path: "/",
      expires: new Date(Date.now() + 60 * 60 * 1000),
    }
  );
  return response;
}

// get payload
export async function getLoggedInUserId() {
  const session = (await cookies()).get("idea-share-auth-session")?.value;
  if (!session) return;
  return (await decrypt(session))?._id;
}
