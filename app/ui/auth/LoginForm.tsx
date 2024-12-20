"use client";
import Link from "next/link";
import { useState } from "react";
// icons
import { IoMdArrowDropdown } from "react-icons/io";
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";

// definition
import { LoginFormSchema } from "@/lib/definitions";
// actions
import { login } from "@/lib/actions";
// interface
interface Errors {
  emailUsername?: string[];
  password?: string[];
}
export default function LoginForm() {
  // states
  // email
  const [emailUsername, setEmailUsername] = useState("");
  // password
  const [password, setPassword] = useState("");
  // is password hide
  const [isPasswordHide, setIsPasswordHide] = useState(true);
  // focus
  const [focus, setFocus] = useState("");
  //   errors
  const [errors, setErrors] = useState<Errors>({});
  // is pending
  const [isPending, setIsPending] = useState(false);

  //   form submit handler
  const formSubmitHandler = async () => {
    const validatedFields = LoginFormSchema.safeParse({
      emailUsername,
      password,
    });
    if (!validatedFields.success) {
      setErrors(validatedFields.error.flatten().fieldErrors);
    } else {
      setErrors({});
      setIsPending(true);
      const response = await login({ emailUsername, password });
      setIsPending(false);
      if (response.emailUsernameError) {
        setErrors((prev) => {
          return {
            ...prev,
            emailUsername: [response.emailUsernameError],
          };
        });
      } else if (response.success) {
        console.log(response);
        setErrors({});
      }
    }
  };

  return (
    <div className="min-w-64 sm:min-w-72 md:min-w-80 xl:min-w-96 p-5 rounded-md overflow-hidden shadow-md">
      {/* header */}
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg text-sky-500">Login</h3>
        <div className="cursor-pointer flex items-center gap-x-0.5 text-xs text-neutral-400 transition-colors ease-in-out duration-150 hover:text-sky-500">
          <span>English(US)</span>
          <IoMdArrowDropdown className="text-lg" />
        </div>
      </div>
      {/* inputs */}
      <div>
        {/* email or username */}
        <div className="mb-4">
          <div
            className={`flex items-center gap-x-1.5 border-b-[.1rem] p-0.5 transition-colors ease-in-out duration-150 ${
              errors?.emailUsername?.length
                ? "border-red-500"
                : focus === "email-username" || emailUsername
                ? "border-cyan-500"
                : "border-neutral-300"
            }`}
          >
            <input
              className="w-full focus:ring-0 focus:outline-none bg-transparent border-none text-sm"
              type="text"
              placeholder="Username/email address"
              value={emailUsername}
              onChange={(e) => {
                setEmailUsername(e.target.value);
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
          {/* email error */}
          {errors?.emailUsername?.length && (
            <div className="text-sm text-red-500 px-0.5">
              {errors?.emailUsername?.map((error) => {
                return <p key={error}>{error}</p>;
              })}
            </div>
          )}
        </div>
        {/* password */}
        <div>
          <div className="mb-5">
            <div
              className={`flex items-center gap-x-1.5 border-b-[.1rem] p-0.5 transition-colors ease-in-out duration-150 ${
                errors?.password?.length
                  ? "border-red-500"
                  : focus === "password" || password
                  ? "border-cyan-500"
                  : "border-neutral-300"
              }`}
            >
              <input
                className="w-full focus:ring-0 focus:outline-none bg-transparent border-none text-sm"
                type={isPasswordHide ? "password" : "text"}
                placeholder="Password"
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
                className="text-neutral-500 text-lg"
                onClick={() => {
                  setIsPasswordHide(!isPasswordHide);
                }}
              >
                {isPasswordHide ? <VscEyeClosed /> : <VscEye />}
              </button>
            </div>
            {/* email error */}
            {errors?.password?.length && (
              <div className="text-sm text-red-500 px-0.5">
                {errors?.password?.map((error) => {
                  return <p key={error}>{error}</p>;
                })}
              </div>
            )}
          </div>
        </div>
        {/* button */}
        <button
          disabled={isPending}
          onClick={formSubmitHandler}
          className="px-5 py-1 rounded-md text-sm flex items-center justify-center bg-cyan-500 text-white transition-colors ease-in-out duration-150 hover:bg-cyan-600 w-[7rem] h-[2.05rem]"
        >
          {isPending ? (
            <div className="w-[1.5rem] aspect-square rounded-full border-4 border-neutral-200 border-r-cyan-300 animate-spin" />
          ) : (
            <span>Login</span>
          )}
        </button>
        {/* link */}
        <div className="text-sm text-neutral-400 mt-5">
          <p>
            Don't have an account ?{" "}
            <Link
              className="font-medium transition-colors ease-in-out duration-150 hover:text-cyan-500 hover:underline"
              href={"/signup"}
            >
              Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
