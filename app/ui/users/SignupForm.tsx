"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
// icons
import { MdArrowDropDown } from "react-icons/md";
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";
// lib
import { SignupFormSchema } from "@/lib/definitions";
// actions
import { signup } from "@/lib/actions/auth";

// form filed errors interface
interface FormFieldErrorsInterface {
  username?: string[];
  email?: string[];
  password?: string[];
}

export default function SignupForm() {
  // states
  // username
  const [username, setUsername] = useState("");
  //   email
  const [email, setEmail] = useState("");
  // password
  const [password, setPassword] = useState("");
  // is password hide
  const [isPasswordHide, setIsPasswordHide] = useState(true);
  // focus
  const [focus, setFocus] = useState("");

  //   errors
  const [errors, setErrors] = useState<FormFieldErrorsInterface>({});
  // is loading
  const [isLoading, setIsLoading] = useState(false);

  // hooks
  const router = useRouter()

  //   form submit handler
  const signupFormSubmitHandler = async () => {
    const validatedFields = SignupFormSchema.safeParse({
      username,
      email,
      password,
    });
    if (!validatedFields.success) {
      setErrors(validatedFields.error.flatten().fieldErrors);
    } else {
      setErrors({});
      setIsLoading(true);
      const response = await signup({ username, email, password });
      setIsLoading(false);
      if (response.usernameError) {
        setErrors((prev) => {
          return {
            ...prev,
            username: [response.usernameError],
          };
        });
      } else if (response.emailError) {
        setErrors((prev) => {
          return {
            ...prev,
            email: [response.emailError],
          };
        });
      } else if (response.success) {
        setErrors({});
        setUsername("");
        setEmail("");
        setPassword("");
        router.push(`/users/profiles?_id=${response._id}`)
      }
    }
  };

  return (
    <div className="min-w-96 bg-white shadow-lg rounded-md overflow-hidden p-5">
      {/* header */}
      <header className="flex items-center justify-between mb-5">
        {/* left */}
        <h3 className="text-green-600">Create account</h3>
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
        {/* email */}
        <div className="mb-5">
          {/* email inputs */}
          <div
            className={`w-full px-1.5 py-1.5 border rounded-md flex items-center gap-x-1.5 transition-colors ease-in-out duration-150 ${
              errors.email?.length
                ? "border-red-500"
                : focus === "email" || email
                ? "border-green-500"
                : "border-neutral-200"
            }`}
          >
            <input
              className="w-full focus:ring-0 focus:outline-none border-none text-sm bg-transparent"
              placeholder="Email"
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrors((prev) => {
                  return {
                    ...prev,
                    email: undefined,
                  };
                });
              }}
              onFocus={() => {
                setFocus("email");
              }}
              onBlur={() => {
                setFocus("");
              }}
            />
          </div>
          {/* email errors */}
          {errors.email?.length && (
            <div className="px-1.5 text-sm text-red-500">
              {errors.email?.map((error) => {
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
        {/* button */}
        <button
          disabled={isLoading}
          onClick={signupFormSubmitHandler}
          className="w-32 h-[33px] rounded-md overflow-hidden transition-colors ease-in-out duration-150 hover:bg-green-600 bg-green-500 text-white flex items-center justify-center"
        >
          {isLoading ? (
            <div className="h-[24px] aspect-square rounded-full border-2 border-white border-r-transparent animate-spin" />
          ) : (
            <span>Signup</span>
          )}
        </button>
        {/* have an account */}
        <div className="mt-5 text-sm text-neutral-500">
          <p>
            Already have an account ?{" "}
            <Link
              className="font-medium transition-colors ease-in-out duration-150 hover:text-green-500 hover:underline"
              href={"/users/login"}
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
