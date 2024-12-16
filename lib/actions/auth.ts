"use server";
import bcrypt from "bcryptjs";
// db
import dbConnection from "../db/dbConnection";
// model
import userModel from "../models/user.model";
// login
export async function login({
  username,
  password,
}: {
  username: string;
  password: string;
}) {
  try {
    await dbConnection();
    // is username exist
    const isUsernameExist = await userModel.findOne({ username });
    if (!isUsernameExist) {
      return { usernameError: "Username not exist" };
    }
    // is password match
    if (!bcrypt.compareSync(password, isUsernameExist.password)) {
      return { passwordError: "Incorrect password" };
    }
    return { success: true };
  } catch (err) {
    return { error: "user login error" };
  }
}
// signup
export async function signup({
  username,
  email,
  password,
}: {
  username: string;
  email: string;
  password: string;
}) {
  try {
    await dbConnection();
    const isUsernameExist = await userModel.findOne({ username });
    if (isUsernameExist) {
      return { usernameError: "Username already exist" };
    }
    const isEmailExist = await userModel.findOne({ email });
    if (isEmailExist) {
      return { emailError: "Email address already exist" };
    }
    await userModel.create({
      username,
      email,
      password: bcrypt.hashSync(password, bcrypt.genSaltSync(10)),
    });
    return { success: true };
  } catch (err) {
    return { signupError: "signup error" };
  }
}
