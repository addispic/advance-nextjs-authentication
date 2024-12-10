// icons
import { GoTasklist } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import { RiUser6Line } from "react-icons/ri";
import { IoExitOutline } from "react-icons/io5";

export default function DashboardHeader(){
    return (
        <div className="flex items-center justify-between px-5 py-3">
            {/* left */}
            <div className="flex items-center gap-x-5">
                {/* toggler */}
                <div className="hidden">
                    <GoTasklist className="text-3xl text-neutral-500 cursor-pointer"/>
                </div>
                {/* search */}
                <div className="min-w-72 flex items-center gap-x-1.5 text-sm border border-neutral-300 rounded-md px-3 py-1">
                    <input className="w-full focus:outline-none focus:ring-0 border-none bg-transparent" type="text" placeholder="Search by username, title, etc" />
                    <CiSearch className="text-xl"/>
                </div>
            </div>
            {/* right */}
            <div className="flex items-center justify-end gap-x-3.5">
                {/* notification */}
                <div className="w-[24px] aspect-square rounded-full overflow-hidden border border-green-300 flex items-center justify-center text-green-500 cursor-pointer">
                    <IoIosNotifications />
                </div>
                {/* user profile */}
                <div className="flex items-center justify-end gap-x-1 cursor-pointer text-sm text-green-500">
                    <span>Haddis</span>
                    <RiUser6Line className="text-xl"/>
                </div>
                {/* logout */}
                <button className="text-xl text-green-500">
                    <IoExitOutline />
                </button>
            </div>
        </div>
    )
}