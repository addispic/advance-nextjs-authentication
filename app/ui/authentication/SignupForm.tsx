"use client";
import React, { useState } from "react";
import Link from "next/link";
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";
// icons
import { IoMdArrowDropdown } from "react-icons/io";
export default function SignupForm() {
  // states
  // username
  const [username, setUsername] = useState("");
  // email
  const [email, setEmail] = useState("");
  // password
  const [password, setPassword] = useState("");
  // is password hide
  const [isPasswordHide, setIsPasswordHide] = useState(true);
  // focus
  const [focus, setFocus] = useState("");
  return (
    <div className="min-w-96 bg-white p-7 rounded-md  shadow-lg">
      {/* header */}
      <header className="flex items-center justify-end">
        {/* language switcher */}
        <div className="flex items-center justify-end gap-x-0.5 text-neutral-500 transition-colors ease-in-out duration-150 hover:text-green-500 cursor-pointer text-sm">
          <span>English(US)</span>
          <IoMdArrowDropdown className="text-2xl" />
        </div>
      </header>
      {/* title */}
      <h3 className="text-xl text-green-500 my-3">Create account</h3>

      {/* inputs */}
      <div>
        {/* username */}
        <div className="mb-5">
          <div
            className={`w-full p-1 border rounded-md ${
              focus === "username" || username
                ? "border-green-500"
                : "border-neutral-300"
            }`}
          >
            <input
              className="w-full focus:outline-none focus:ring-0 bg-transparent text-sm"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onFocus={() => setFocus("username")}
              onBlur={() => setFocus("")}
            />
          </div>
          {!true && (
            <div className="text-sm text-red-500">
              <p>Username required</p>
            </div>
          )}
        </div>
        {/* email */}
        <div className="mb-5">
          <div
            className={`w-full p-1 border rounded-md ${
              focus === "email" || email
                ? "border-green-500"
                : "border-neutral-300"
            }`}
          >
            <input
              className="w-full focus:outline-none focus:ring-0 bg-transparent text-sm"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setFocus("email")}
              onBlur={() => setFocus("")}
            />
          </div>
          {!true && (
            <div className="text-sm text-red-500">
              <p>Email required</p>
            </div>
          )}
        </div>
        {/* password */}
        <div className="mb-5">
          <div
            className={`w-full flex items-center p-1.5 border rounded-md ${
              focus === "password" || password
                ? "border-green-500"
                : "border-neutral-300"
            }`}
          >
            <input
              className="w-full focus:outline-none focus:ring-0 bg-transparent text-sm"
              type={isPasswordHide ? "password" : "text"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setFocus("password")}
              onBlur={() => setFocus("")}
            />
            <button
              onClick={() => {
                setIsPasswordHide(!isPasswordHide);
              }}
              className="text-lg text-neutral-500 transition-colors ease-in-out duration-150 hover:text-neutral-700"
            >
              {isPasswordHide ? <VscEyeClosed /> : <VscEye />}
            </button>
          </div>
          {!true && (
            <div className="text-sm text-red-500">
              <p>Password required</p>
            </div>
          )}
        </div>
        {/* button */}
        <button className="w-full py-1.5 flex items-center justify-center text-white bg-green-500 transition-colors ease-in-out duration-150 hover:bg-green-600 rounded-md mt-7">
            <span>Signup</span>
        </button>
        {/* link */}
        <p className="mt-7 text-sm text-neutral-500">
            Already have an account ? <Link className="font-medium transition-colors ease-in-out duration-150 hover:text-green-500" href={'/login'}>Login</Link>
        </p>
      </div>
    </div>
  );
}
