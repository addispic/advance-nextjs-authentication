"use server";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
// db
import { dbConnectionHandler } from "../db/db-connection";
// models
// user model
import UserModel from "../models/user-model";
// lib
import { encrypt } from "../lib/session";
// signup
export async function signup(userCredentials: {
  username: string;
  email: string;
  password: string;
}) {
  const { username, email, password } = userCredentials;
  try {
    await dbConnectionHandler();
    const isUsernameExist = await UserModel.findOne({ username });
    if (isUsernameExist) {
      return { usernameError: "Username already exist" };
    }
    const isEmailExist = await UserModel.findOne({ email });
    if (isEmailExist) {
      return { emailError: "Email address already exist" };
    }
    const newUser = await UserModel.create({
      username,
      email,
      password: bcrypt.hashSync(password, bcrypt.genSaltSync(10)),
    });
    (await cookies()).set("session", await encrypt({ _id: newUser?._id }), {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
      expires: new Date(Date.now() + 60 * 1000),
    });
    return { successMessage: "successful signup" };
  } catch (err) {
    return { error: "fail to signup" };
  }
}

// login
export async function login(userCredentials: {
  username: string;
  password: string;
}) {
  const { username, password } = userCredentials;
  try {
    await dbConnectionHandler();
    const isUsernameExist = await UserModel.findOne({ username });
    if (!isUsernameExist) {
      return { usernameError: "Username not exist" };
    }
    if (!bcrypt.compareSync(password, isUsernameExist.password)) {
      return { passwordError: "Wrong password" };
    }
    (await cookies()).set(
      "session",
      await encrypt({ _id: isUsernameExist._id }),
      {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        path: "/",
        expires: new Date(Date.now() + 60 * 1000),
      }
    );
    return { successMessage: "successful login" };
  } catch (err) {
    console.log(err);
    return { error: "login failed" };
  }
}
