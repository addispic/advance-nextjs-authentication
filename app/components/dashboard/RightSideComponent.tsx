"use client"
import React,{useEffect} from 'react';
import {formatDistanceToNow} from 'date-fns'

// icons
import { PiUser } from "react-icons/pi";
import { AiOutlineDelete } from "react-icons/ai";

// components
// dashboard
import RightSideComponentHeader from "./RightSideComponentHeader";

// contexts
// user context 
import { useUserContext } from "@/app/contexts/UserContext";

export default function RightSideComponent() {
  const {users,getAllUsers,refresher} = useUserContext()
  // effects
  // get all users
  useEffect(()=>{
    getAllUsers()
  },[refresher])
  return (
    <div className="w-64 h-full p-1.5">
      <div className="w-full h-full bg-neutral-100 rounded-md overflow-hidden">
        {/* header */}
        <RightSideComponentHeader />
        {/* lists */}
        <div className="p-1.5">
          {
            users?.length > 0 
            ?
            <>
            {users.map((userItem: {_id: string;username: string;createdAt: string}) => {
            return (
              <div
                key={userItem._id}
                className="p-0.5 flex items-center justify-between border-b border-neutral-200 pb-1 mb-0.5"
              >
                {/* user detail */}
                <div className="flex items-center gap-x-1.5 text-neutral-700 text-sm">
                  {/* icon */}
                  <div className="shrink-0">
                    <PiUser className="text-lg" />
                  </div>
                  {/* detail */}
                  <div>
                    <p>{userItem.username}</p>
                    <p className="text-xs -mt-1 text-neutral-500">
                      {formatDistanceToNow(new Date(userItem.createdAt),{addSuffix: true})}
                    </p>
                  </div>
                </div>
                {/* action */}
                <div>
                  <AiOutlineDelete className="text-lg text-neutral-400 transition-colors ease-in-out duration-150 hover:text-neutral-600 cursor-pointer" />
                </div>
              </div>
            );
          })}
            </>
            :
            <div>No Users Yet</div>
          }
          
        </div>
      </div>
    </div>
  );
}
