import React from "react"

// ui
// dashboard
import DashboardHeader from "../ui/dashboard/DashboardHeader"
export default function DashboardLayout({children}: {children: React.ReactNode}){
    return (
        <div className="flex w-screen h-screen overflow-hidden">
            {/* left */}
            <div className="min-w-72 h-full bg-green-200">left</div>
            {/* right */}
            <div className="flex-1 flex flex-col">
                {/* header */}
                <DashboardHeader />
                {/* content */}
                <div className="flex flex-1">
                    {/* left */}
                    <div className="flex-1 bg-neutral-300">{children}</div>
                    {/* right */}
                    <div className="min-w-64 h-full bg-red-300">right</div>
                </div>
            </div>
        </div>
    )
}