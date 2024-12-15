"use client"
import React,{useState} from "react";
import axios from "axios";
// icons
import { IoIosAdd } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

export default function RightSideComponentHeader(){
    // states
    // user name
    const [username,setUsername] = useState("")
    // is focus
    const [focus,setFocus] = useState("")
    // is Error
    const [isError,setIsError] = useState(false)

    // form submit handler
    const formSubmitHandler = async () => {
        if(!username.trim()){
            setIsError(true)
        }else{
            setIsError(false)
            const formData = new FormData() 
            formData.append("username",username)
            const response = await axios.post("http://localhost:3000/api/users",formData)
            console.log(response.data)
            setUsername("")
        }
    }
    return (
        <header className="p-1.5 flex items-center gap-x-1.5">
          {/* add new */}
          <div className={`flex-1 flex items-center gap-x-1.5 py-0.5 px-1.5 border transition-colors ease-in-out duration-150 rounded-md ${isError ? "border-red-500" : focus === "username" || username ? "border-green-500" : "border-neutral-200"}`}>
            <input
              className="w-full focus:ring-0 focus:outline-none bg-transparent text-sm border-none"
              type="text"
              placeholder="add new user"
              value={username}
              onChange={(e)=>{
                setIsError(false)
                setUsername(e.target.value)
              }}
              onFocus={()=>{
                setFocus("username")
              }}
              onBlur={()=>{
                setFocus("")
              }}
            />
            <IoIosAdd onClick={()=>{
                formSubmitHandler()
            }} className="text-2xl cursor-pointer text-neutral-400 transition-colors ease-in-out duration-150 hover:text-neutral-600" />
          </div>
          {/* search */}
          <div>
            <CiSearch className="text-2xl cursor-pointer text-neutral-400 transition-colors ease-in-out duration-150 hover:text-neutral-600" />
          </div>
        </header>
    )
}