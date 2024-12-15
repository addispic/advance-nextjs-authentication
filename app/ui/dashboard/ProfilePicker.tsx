"use client";

import React, { useState } from "react";

// icons
import { IoMdCamera } from "react-icons/io";

export default function ProfilePicker() {
  // state
  const [profile, setProfile] = useState<File>();

  // submit handler
  const profileSubmitHandler = async (event) => {
    if (event.target.files?.[0]) {
      const formData = new FormData();
      formData.append("profile", event.target.files?.[0]);
      formData.append("upload_preset", "haddis");
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/diyn4opd7/image/upload",
        {
          method: "POST",
          body: formData,
        }
      ).then((res) => res.json());
      console.log(response.data);
    }
  };
  return (
    <div className="absolute left-0 bottom-0 w-full h-max flex items-center justify-center">
      <input
        type="file"
        accept="image/*"
        hidden
        id="profile-picker"
        onChange={profileSubmitHandler}
      />
      <label htmlFor="profile-picker">
        <div className="w-[24px] aspect-square rounded-full overflow-hidden bg-white text-green-500 flex items-center justify-center cursor-pointer opacity-75 transition-opacity duration-150 ease-in-out hover:opacity-100">
          <IoMdCamera />
        </div>
      </label>
    </div>
  );
}
