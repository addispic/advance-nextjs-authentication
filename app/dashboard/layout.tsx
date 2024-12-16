// ui
// dashboard
import RightSideBar from "../ui/dashboard/RightSideBar"
export default function DashboardLayout({children}: {children: React.ReactNode}){
    return (
        <div className="w-screen h-screen overflow-hidden flex">
            {/* left side bar */}
            <div className="w-56 bg-red-200">left side bar</div>
            {/* right content */}
            <div className="flex-1 flex flex-col">
                {/* header */}
                <header className="bg-green-200">Header Component Over Here</header>
                {/* content */}
                <div className="flex-1 flex">
                    {/* pages */}
                    <div className="flex-1">{children}</div>
                    {/* right side component */}
                    <RightSideBar />
                </div>
            </div>
        </div>
    )
}