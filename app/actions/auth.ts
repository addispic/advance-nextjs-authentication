"use server"

// db
import { dbConnectionHandler } from "../db/db-connection";

// signup
export async function signup(userCredentials: {username: string; email: string; password: string}){
    const {username,email,password} = userCredentials 
    try{
        await dbConnectionHandler()
        console.log({username,email,password})
        return {success: true}
    }catch(err){
        console.log(err)
        return {success: false}
    }
}