"use client"
import Image from 'next/image'
import myProfileImage from '@/public/pexels-photo-4879302.webp'

// icons
import { IoMdCamera } from "react-icons/io";

// ui
import ProfilePicker from './ProfilePicker';

export default function DashboardRightSideBar() {
  return (
    <div className="min-w-72 h-full px-5 py-1.5 bg-neutral-50">
      {/* profiles */}
      <div className="bg-white shadow-sm p-5 rounded-md overflow-hidden flex flex-col items-center justify-center">
        {/* image */}
        <div className="relative w-[120px] aspect-square rounded-full overflow-hidden">
          <Image src={myProfileImage} fill={true} alt='' objectFit='cover'/>
          {/* profile picker */}
          <ProfilePicker />
        </div>
        {/* navigator */}
        <div>navigator</div>
        {/* user info */}
        <div>user info</div>
      </div>
    </div>
  );
}
