import React from "react";

import { UserContextProvider } from "../contexts/UserContext";

// components
// dashboard
import RightSideComponent from "../components/dashboard/RightSideComponent";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <UserContextProvider>
      <div className="w-screen h-screen overflow-hidden flex">
        {/* left */}
        <div className="w-64 bg-neutral-200 h-full">Left</div>
        {/* right */}
        <div className="flex-1 flex">
          {/* left */}
          <div className="flex-1 bg-green-300">
            {/* header */}
            <header>Header</header>
            {/* content */}
            <div>{children}</div>
          </div>
          {/* right side component */}
          <RightSideComponent />
        </div>
      </div>
    </UserContextProvider>
  );
}
