import Link from "next/link";

// session
import { getPayload } from "@/lib/session";

// ui
import GetUsernameAndProfile from "./users/GetUsernameAndProfile";

export default async function Header() {
  const _id = await getPayload();
  return (
    <header className="flex items-center justify-between">
      <div></div>
      {_id ? (
        <div>
          {/* username & profile */}
          <GetUsernameAndProfile _id={`${_id}`} flip={true}/>
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
