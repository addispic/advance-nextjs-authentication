"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
// action
import { logout } from "@/lib/actions";
// icons
import { IoLogOutOutline } from "react-icons/io5";
export default function LogoutButton() {
  // states
  const [isPending, setIsPending] = useState(false);

  // hooks
  const router = useRouter()

  // logout handler
  const logoutHandler = async () => {
    setIsPending(true);
    const response = await logout();
    setIsPending(false);
    if (response.success) {
      router.refresh();
    }
  };
  return (
    <button
      onClick={logoutHandler}
      className="w-[82px] h-[26px] bg-green-500 text-white text-sm flex items-center justify-center gap-x-1.5 rounded-sm transition-colors ease-in-out duration-150 hover:bg-green-600"
    >
      {isPending ? (
        <div className="w-[20px] aspect-square border-4 rounded-full border-neutral-100 border-r-green-300 animate-spin" />
      ) : (
        <>
          <IoLogOutOutline className="shrink-0 text-lg" />
          <span>Logout</span>
        </>
      )}
    </button>
  );
}
