import Link from "next/link";

// session
import { getPayload } from "@/lib/session";

// ui
import GetUsernameAndProfile from "./users/GetUsernameAndProfile";
import LogoutButton from "./users/LogoutButton";
export default async function Header() {
  const _id = await getPayload();
  return (
    <header className="flex items-center justify-between">
      <div></div>
      {_id ? (
        <div className="flex items-center gap-x-2">
          {/* username & profile */}
          <GetUsernameAndProfile _id={`${_id}`} flip={true}/>
          {/* logout */}
          <LogoutButton />
        </div>
      ) : (
        <div className="flex items-center gap-x-3 text-sm text-neutral-700">
          <Link href={"/users/login"}>Login</Link>
          <Link href={"/users/signup"}>Signup</Link>
        </div>
      )}
    </header>
  );
}
