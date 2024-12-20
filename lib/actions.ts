"use server";
import bcrypt from "bcryptjs";
// db
import dbConnection from "./dbConnection";
// models
import userModel from "./models/userModel";
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
      $or: [{ username: emailUsername},{email: emailUsername }],
    });
    if (!isUserExist)
      return { success: false, emailUsernameError: "Username/email not exist" };
    if (!bcrypt.compareSync(password, isUserExist.password))
      return { success: false, passwordError: "Incorrect password" };
    return { success: true, _id: isUserExist._id.toString() };
  } catch (err) {
    console.log(err);
    return { success: false, errorMessage: "user login failed" };
  }
}
