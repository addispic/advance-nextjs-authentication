"use client"
import React from "react";
// icons
import { IoIosCamera } from "react-icons/io";
export default function ProfilePicker() {

    // profile submit handler
    const profileSubmitHandler = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.files?.[0]){
            const formData = new FormData()
            formData.append("file", event.target.files?.[0]);
            formData.append("upload_preset", "menelik");

            const data = await fetch(
              "https://api.cloudinary.com/v1_1/diyn4opd7/image/upload",
              {
                method: "POST",
                body: formData,
              }
            ).then((r) => r.json());
            if(data?.url){
                console.log(data.url)
            }

            event.target.value = ""
        }
        
    }
  return (
    <div>
      <input
        type="file"
        name="profile"
        id="profile-picker"
        accept="image/*"
        hidden 
        onChange={profileSubmitHandler}
      />
      <label
        htmlFor="profile-picker"
        className="absolute left-1/2 -translate-x-1/2 bottom-0 cursor-pointer"
      >
        <div className="w-[24px] aspect-square rounded-md overflow-hidden flex items-center justify-center bg-white text-green-500 text-lg">
          <IoIosCamera />
        </div>
      </label>
    </div>
  );
}
