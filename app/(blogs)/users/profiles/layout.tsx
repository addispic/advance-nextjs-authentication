import React from "react";

// ui
import ProfilesHeader from "@/app/ui/profiles/ProfilesHeader";

export default async function ProfilesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    
  return (
    <div>
      {/* header stuff here */}
      <ProfilesHeader />
      <div>{children}</div>
    </div>
  );
}
