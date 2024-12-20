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
    return { success: true, _id: (newUser._id).toString() };
  } catch (err) {
    console.log(err);
    return { success: false, errorMessage: "Signup failed" };
  }
}
