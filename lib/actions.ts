"use server";
import { cookies } from "next/headers";
import bcrypt from "bcryptjs";
// db
import dbConnection from "./dbConnection";
// models
import userModel from "./models/userModel";
// session
import { encrypt } from "./session";
// signup
export async function signup({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  try {
    await dbConnection();
    const isEmailExist = await userModel.findOne({ email });
    if (isEmailExist) {
      return { emailError: "Email address already exist", success: false };
    }
    const newUser = await userModel.create({
      email,
      password: bcrypt.hashSync(password, bcrypt.genSaltSync(10)),
    });
    (await cookies()).set(
      "idea-share-auth-session",
      await encrypt({ _id: newUser._id }),
      {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        path: "/",
        expires: new Date(Date.now() + 60 * 60 * 1000),
      }
    );
    return { success: true, _id: newUser._id.toString() };
  } catch (err) {
    console.log(err);
    return { success: false, errorMessage: "Signup failed" };
  }
}

// login
export async function login({
  emailUsername,
  password,
}: {
  emailUsername: string;
  password: string;
}) {
  try {
    await dbConnection();
    const isUserExist = await userModel.findOne({
      $or: [{ username: emailUsername }, { email: emailUsername }],
    });
    if (!isUserExist)
      return { success: false, emailUsernameError: "Username/email not exist" };
    if (!bcrypt.compareSync(password, isUserExist.password))
      return { success: false, passwordError: "Incorrect password" };
    (await cookies()).set(
      "idea-share-auth-session",
      await encrypt({ _id: isUserExist._id }),
      {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        path: "/",
        expires: new Date(Date.now() + 60 * 60 * 1000),
      }
    );
    return { success: true, _id: isUserExist._id.toString() };
  } catch (err) {
    console.log(err);
    return { success: false, errorMessage: "user login failed" };
  }
}
