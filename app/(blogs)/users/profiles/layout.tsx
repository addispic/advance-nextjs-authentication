import React from "react";
import Image from "next/image";

// icons
import { IoIosCamera } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";

export default function ProfilesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* header stuff here */}
      <header>
        {/* background image */}
        <div className="w-full h-[120px] sm:h-[130px] md:h-[140px] lg:h-[150px] xl:h-[160px] relative overflow-hidden rounded-b-sm md:rounded-b-md lg:rounded-b-lg xl:rounded-b-xl">
          {/* pick background image */}

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
          <Image
            src={
              "https://images.pexels.com/photos/1042423/pexels-photo-1042423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            fill
            alt="user background image"
            style={{ objectFit: "cover" }}
          />
        </div>
        {/* user profiles */}
        <div className="flex justify-between">
          {/* left */}
          <div className="pl-[1.5rem] flex gap-x-3">
            {/* user profile */}
            <div className="w-[7rem] aspect-square rounded-full overflow-hidden relative border-2 border-white shadow-md z-40 mt-[-3.5rem]">
              {/* user profile image picker */}
              <div>
                <input
                  type="file"
                  accept="image/*"
                  id="user-profile-background-image-picker"
                  hidden
                />
                <label htmlFor="user-profile-background-image-picker">
                  <div className="absolute bottom-0.5 left-1/2 -translate-x-1/2 z-50 bg-neutral-300 cursor-pointer transition-colors ease-in-out duration-150 hover:bg-neutral-100 w-[24px] aspect-square rounded-full overflow-hidden flex items-center justify-center">
                    <IoIosCamera />
                  </div>
                </label>
              </div>
              <Image
                src={
                  "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
                fill
                alt="user profile image"
                style={{ objectFit: "cover" }}
              />
            </div>
            {/* user detail */}
            <div className="py-1.5">
                {/* username */}
                <div className="text-sm text-green-600"><span>Haddis Menelik</span></div>
                {/* email */}
                <a href="mailto:addispick@gmail.com" className="flex items-center gap-x-1.5 text-sm text-green-600">
                    <MdOutlineMailOutline />
                    <span>addispik@gmail.com</span>
                </a>
            </div>
          </div>
          {/* right */}
          <div>right</div>
        </div>
      </header>
      {/* pages */}
      <div>{children}</div>
    </div>
  );
}
