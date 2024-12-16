import React from "react";

// ui
import Header from "../ui/Header";

export default function BlogsLayout({children}: {children: React.ReactNode}){
    return (
        <div className="w-screen h-screen overflow-hidden flex">
            {/* left content */}
            <div className="w-56 shrink-0 h-full bg-red-100">Left Content Over Here</div>
            {/* right Content */}
            <div className="flex-1 flex flex-col">
                {/* header */}
                <Header />
                {/* content */}
                <div className="flex-1 flex">
                    {/* pages */}
                    <div className="flex-1">{children}</div>
                    {/* right side bar */}
                    <div className="w-64 bg-yellow-100 shrink-0">right side bar</div>
                </div>
            </div>
        </div>
    )
}