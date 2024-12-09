"use server";
import bcrypt from "bcryptjs";
// db
import { dbConnectionHandler } from "../db/db-connection";
// models
// user model
import UserModel from "../models/user-model";
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
    return { successMessage: "successful signup" };
  } catch (err) {
    return { error: "fail to signup" };
  }
}
