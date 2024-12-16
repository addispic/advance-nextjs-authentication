"use client"
// icons
import { MdArrowDropDown } from "react-icons/md";
export default function SignupForm(){
    return (
        <div className="min-w-96 bg-white shadow-lg rounded-md overflow-hidden p-5">
            {/* header */}
            <header className="flex items-center justify-between mb-3">
                {/* left */}
                <h3 className="text-cyan-600">Create account</h3>
                {/* switcher */}
                <div className="flex items-center gap-x-0.5 text-xs cursor-pointer text-neutral-500 transition-colors ease-in-out duration-150 hover:text-cyan-500">
                    <span>English(US)</span>
                    <MdArrowDropDown className="text-xl"/>
                </div>
            </header>
            {/* inputs */}
            <div>inputs</div>
        </div>
    )
}