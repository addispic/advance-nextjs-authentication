// icons
import { IoIosAdd } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
export default function RightSideComponent(){
    return (
        <div className="w-64 h-full p-1.5">
            <div className="w-full h-full bg-neutral-100 rounded-md overflow-hidden">
                {/* header */}
                <header className="p-1.5 flex items-center gap-x-1.5">
                    {/* add new */}
                    <div className="flex-1 flex items-center gap-x-1.5 p-0.5 border border-neutral-200 rounded-md">
                        <input className="w-full focus:ring-0 focus:outline-none bg-transparent text-sm border-none" type="text" placeholder="add new user" />
                        <IoIosAdd className="text-2xl cursor-pointer text-neutral-400 transition-colors ease-in-out duration-150 hover:text-neutral-600"/>
                    </div>
                    {/* search */}
                    <div>
                        <CiSearch className="text-2xl cursor-pointer text-neutral-400 transition-colors ease-in-out duration-150 hover:text-neutral-600"/>
                    </div>
                </header>
                {/* lists */}
                <div>list over here</div>
            </div>
        </div>
    )
}