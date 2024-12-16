"use client"
import React,{useState} from "react";
import axios from "axios";
// icons
import { IoIosAdd } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

export default function AddNewUser() {
    // states
    // username
    const [username,setUsername] = useState("")
    // search
    const [search,setSearch] = useState("")
    // focus
    const [focus,setFocus] = useState("")
    // error
    const [error,setError] = useState("")

    // form submit handler
    // add new user handler
    const addNewUserHandler = async () => {
        if(!username?.trim()){
            setError("username")
        }else{
            setError("")
            const formData = new FormData()
            formData.append("username",username)
            const response = await axios.post("http://localhost:3000/api/users",formData)
            console.log(response.data)
            if(response.data?.success){
                setUsername("")
                // refresh the page to include the new user
            }
        }
    }

  return (
    <div>
      {/* inputs */}
      <div className="flex items-center gap-x-1.5">
        {/* username */}
        <div className={`flex items-center gap-1.5 border px-1.5 py-0.5 rounded-md bg-neutral-50 transition-colors ease-in-out duration-150 ${error === "username" ? "border-red-600" : focus === "username" || username ? "border-green-500" : "border-neutral-300"}`}>
          <input
            className="w-full focus:ring-0 focus:outline-none border-none bg-transparent text-sm"
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e)=>{
                setUsername(e.target.value)
                setError("")
            }}
            onFocus={()=>{
                setFocus("username")
            }}
            onBlur={()=>{
                setFocus("")
            }}
          />
          <IoIosAdd onClick={addNewUserHandler} className="text-2xl cursor-pointer text-neutral-400 transition-colors ease-in-out duration-150 hover:text-neutral-600" />
        </div>
        <CiSearch />
      </div>
    </div>
  );
}
