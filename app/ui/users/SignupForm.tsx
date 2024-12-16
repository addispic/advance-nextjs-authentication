"use client";
import React, { useState } from "react";
import Link from "next/link";
// icons
import { MdArrowDropDown } from "react-icons/md";
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";
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

  return (
    <div className="min-w-96 bg-white shadow-lg rounded-md overflow-hidden p-5">
      {/* header */}
      <header className="flex items-center justify-between mb-5">
        {/* left */}
        <h3 className="text-cyan-600">Create account</h3>
        {/* switcher */}
        <div className="flex items-center gap-x-0.5 text-xs cursor-pointer text-neutral-500 transition-colors ease-in-out duration-150 hover:text-cyan-500">
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
              false
                ? "border-red-500"
                : focus === "username" || username
                ? "border-cyan-500"
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
          {false && (
            <div className="px-1.5 text-sm text-red-500">
              <p>Username required</p>
            </div>
          )}
        </div>
        {/* email */}
        <div className="mb-5">
          {/* email inputs */}
          <div
            className={`w-full px-1.5 py-1.5 border rounded-md flex items-center gap-x-1.5 transition-colors ease-in-out duration-150 ${
              false
                ? "border-red-500"
                : focus === "email" || email
                ? "border-cyan-500"
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
          {false && (
            <div className="px-1.5 text-sm text-red-500">
              <p>Email required</p>
            </div>
          )}
        </div>
        {/* password */}
        <div className="mb-5">
          {/* password inputs */}
          <div
            className={`w-full px-1.5 py-1.5 border rounded-md flex items-center gap-x-1.5 transition-colors ease-in-out duration-150 ${
              false
                ? "border-red-500"
                : focus === "password" || password
                ? "border-cyan-500"
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
              }}
              onFocus={() => {
                setFocus("password");
              }}
              onBlur={() => {
                setFocus("");
              }}
            />
            <button onClick={()=>{
                setIsPasswordHide(!isPasswordHide)
            }} className="text-neutral-400 transition-colors ease-in-out duration-150 hover:text-cyan-500 text-xl">
                {
                    isPasswordHide 
                    ?
                    <VscEyeClosed />
                    :
                    <VscEye />
                }
            </button>
          </div>
          {/* password errors */}
          {false && (
            <div className="px-1.5 text-sm text-red-500">
              <p>Password required</p>
            </div>
          )}
        </div>
        {/* button */}
        <button className="w-32 h-[33px] rounded-md overflow-hidden transition-colors ease-in-out duration-150 hover:bg-cyan-600 bg-cyan-500 text-white flex items-center justify-center">
            <span>Signup</span>
        </button>
        {/* have an account */}
        <div className="mt-5 text-sm text-neutral-500">
            <p>
                Already have an account ? <Link className="font-medium transition-colors ease-in-out duration-150 hover:text-cyan-500 hover:underline" href={"/users/login"}>Login</Link>
            </p>
        </div>
      </div>
    </div>
  );
}
