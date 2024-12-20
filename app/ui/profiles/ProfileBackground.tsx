import React from "react";
import Image from "next/image";

// ui
import ProfileBackgroundImagePicker from "./ProfileBackgroundImagePicker";

export default function ProfileBackground() {
  return (
    <div className="w-full h-[120px] sm:h-[130px] md:h-[140px] lg:h-[150px] xl:h-[160px] relative overflow-hidden rounded-b-sm md:rounded-b-md lg:rounded-b-lg xl:rounded-b-xl">
      {/* pick background image */}
      <ProfileBackgroundImagePicker />
      <Image
        src={
          "https://images.pexels.com/photos/1042423/pexels-photo-1042423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        fill
        alt="user background image"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
