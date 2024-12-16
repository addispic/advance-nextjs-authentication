"use client";
import React, { useState } from "react";
import Link from "next/link";
// icons
import { MdArrowDropDown } from "react-icons/md";
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";
// lib
import { LoginFormSchema } from "@/lib/definitions";

// form filed errors interface
interface FormFieldErrorsInterface {
  username?: string[];
  password?: string[];
}

export default function LoginForm() {
  // states
  // username
  const [username, setUsername] = useState("");
  // password
  const [password, setPassword] = useState("");
  // is password hide
  const [isPasswordHide, setIsPasswordHide] = useState(true);
  // focus
  const [focus, setFocus] = useState("");

  //   errors
  const [errors, setErrors] = useState<FormFieldErrorsInterface>({});

  //   form submit handler
  const signupFormSubmitHandler = async () => {
    const validatedFields = LoginFormSchema.safeParse({
      username,
      password,
    });
    if (!validatedFields.success) {
      setErrors(validatedFields.error.flatten().fieldErrors);
    } else {
      setErrors({});
      console.log({ username, password });
    }
  };

  return (
    <div className="min-w-96 bg-white shadow-lg rounded-md overflow-hidden p-5">
      {/* header */}
      <header className="flex items-center justify-between mb-5">
        {/* left */}
        <h3 className="text-green-600">Login</h3>
        {/* switcher */}
        <div className="flex items-center gap-x-0.5 text-xs cursor-pointer text-neutral-500 transition-colors ease-in-out duration-150 hover:text-green-500">
          <span>English(US)</span>
          <MdArrowDropDown className="text-xl" />
        </div>
      </header>
      {/* inputs */}
      <div>
        {/* username */}
        <div className="mb-5">
          {/* username inputs */}
          <div
            className={`w-full px-1.5 py-1.5 border rounded-md flex items-center gap-x-1.5 transition-colors ease-in-out duration-150 ${
              errors.username?.length
                ? "border-red-500"
                : focus === "username" || username
                ? "border-green-500"
                : "border-neutral-200"
            }`}
          >
            <input
              className="w-full focus:ring-0 focus:outline-none border-none text-sm bg-transparent"
              placeholder="Username"
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                setErrors((prev) => {
                  return {
                    ...prev,
                    username: undefined,
                  };
                });
              }}
              onFocus={() => {
                setFocus("username");
              }}
              onBlur={() => {
                setFocus("");
              }}
            />
          </div>
          {/* username errors */}
          {errors.username?.length && (
            <div className="px-1.5 text-sm text-red-500">
              {errors.username?.map((error) => {
                return <p key={error}>{error}</p>;
              })}
            </div>
          )}
        </div>
        {/* password */}
        <div className="mb-5">
          {/* password inputs */}
          <div
            className={`w-full px-1.5 py-1.5 border rounded-md flex items-center gap-x-1.5 transition-colors ease-in-out duration-150 ${
              errors.password?.length
                ? "border-red-500"
                : focus === "password" || password
                ? "border-green-500"
                : "border-neutral-200"
            }`}
          >
            <input
              className="w-full focus:ring-0 focus:outline-none border-none text-sm bg-transparent"
              placeholder="Password"
              type={isPasswordHide ? "password" : "text"}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setErrors((prev) => {
                  return {
                    ...prev,
                    password: undefined,
                  };
                });
              }}
              onFocus={() => {
                setFocus("password");
              }}
              onBlur={() => {
                setFocus("");
              }}
            />
            <button
              onClick={() => {
                setIsPasswordHide(!isPasswordHide);
              }}
              className="text-neutral-400 transition-colors ease-in-out duration-150 hover:text-green-500 text-xl"
            >
              {isPasswordHide ? <VscEyeClosed /> : <VscEye />}
            </button>
          </div>
          {/* password errors */}
          {errors.password?.length && (
            <div className="px-1.5 text-sm text-red-500">
              {errors.password?.map((error) => {
                return <p key={error}>{error}</p>;
              })}
            </div>
          )}
        </div>
        {/* forget password */}
        <div className="flex items-center justify-end text-sm text-neutral-500 transition-colors ease-in-out duration-150 hover:text-green-600 mb-3 hover:underline">
            <Link href={"#"}><span>Forget password</span></Link>
        </div>
        {/* button */}
        <button
          onClick={signupFormSubmitHandler}
          className="w-32 h-[33px] rounded-md overflow-hidden transition-colors ease-in-out duration-150 hover:bg-green-600 bg-green-500 text-white flex items-center justify-center"
        >
          <span>Login</span>
        </button>
        {/* have an account */}
        <div className="mt-5 text-sm text-neutral-500">
          <p>
            Don't have an account ?{" "}
            <Link
              className="font-medium transition-colors ease-in-out duration-150 hover:text-green-500 hover:underline"
              href={"/users/signup"}
            >
              Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
