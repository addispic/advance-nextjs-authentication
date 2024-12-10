// icons
import { GoTasklist } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
export default function DashboardHeader(){
    return (
        <div className="flex items-center justify-between px-5 py-3">
            {/* left */}
            <div className="flex items-center gap-x-5">
                {/* toggler */}
                <div>
                    <GoTasklist className="text-3xl text-neutral-500 cursor-pointer"/>
                </div>
                {/* search */}
                <div className="min-w-72 flex items-center gap-x-1.5 text-sm border border-neutral-300 rounded-md px-3 py-1">
                    <input className="w-full focus:outline-none focus:ring-0 border-none bg-transparent" type="text" placeholder="Search by username, title, etc" />
                    <CiSearch className="text-xl"/>
                </div>
            </div>
            {/* right */}
            <div>right</div>
        </div>
    )
}