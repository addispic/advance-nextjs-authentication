import React from "react";

// icons
import { IoIosCamera } from "react-icons/io";
export default function ProfileBackgroundImagePicker(){
    return (
        <div>
        <input
          type="file"
          accept="image/*"
          id="user-profile-background-image-picker"
          hidden
        />
        <label htmlFor="user-profile-background-image-picker">
          <div className="absolute right-3 top-3 z-30 bg-neutral-300 cursor-pointer transition-colors ease-in-out duration-150 hover:bg-neutral-100 w-[24px] aspect-square rounded-full overflow-hidden flex items-center justify-center">
            <IoIosCamera />
          </div>
        </label>
      </div>
    )
}