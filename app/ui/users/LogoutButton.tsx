"use client"
import { useRouter } from "next/navigation";
import { logout } from "@/lib/actions/auth";
// icons
import { RxExit } from "react-icons/rx";
export default function LogoutButton() {
    // hooks
    const router = useRouter()
    // logout handler
    const logoutHandler = async () => {
        const response = await logout()
        if(response.success){
            router.refresh()
        }
    }
  return (
    <button onClick={logoutHandler} className="flex items-center gap-x-1.5 px-1.5 text-sm text-green-600 transition-colors ease-in-out duration-150 hover:text-green-500">
      <RxExit />
      <span>Logout</span>
    </button>
  );
}
