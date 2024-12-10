import {SignJWT, jwtVerify, JWTPayload} from 'jose'
import { NextRequest, NextResponse } from 'next/server';

// secrete key
const secretKey = process.env.SECRET_KEY || "";
// encoded key
const encodedKey = new TextEncoder().encode(secretKey)

// encrypt
export async function encrypt(payload: JWTPayload){
    return new SignJWT(payload)
        .setProtectedHeader({alg: "HS256"})
        .setIssuedAt()
        .setExpirationTime("1h from now")
        .sign(encodedKey)
}

// decrypt
export async function decrypt(session: string){
    try{
        const {payload} = await jwtVerify(session,encodedKey,{algorithms: ['HS256']})
        return payload
    }catch(err){
        console.log(err)
        console.log("Failed to verify session")
    }
}

// update session
export async function updateSession(request: NextRequest){
    const session = request.cookies.get("session")?.value;
    if (!session) return; 
    const parsed = await decrypt(session)
    const response = NextResponse.next()

    response.cookies.set({
        name: 'session',
        value: await encrypt({_id: parsed?._id}),
        httpOnly: true,
        sameSite: 'lax',
        secure: true,
        path: "/",
        expires: new Date(Date.now() + 60 * 60 * 1000)
    })

    return response

}