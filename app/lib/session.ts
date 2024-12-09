import {SignJWT, jwtVerify, JWTPayload} from 'jose'

// secrete key
const secretKey = process.env.SECRET_KEY || "";
// encoded key
const encodedKey = new TextEncoder().encode(secretKey)

// encrypt
export async function encrypt(payload: JWTPayload){
    return new SignJWT(payload)
        .setProtectedHeader({alg: "HS256"})
        .setIssuedAt()
        .setExpirationTime("60s from now")
        .sign(encodedKey)
}