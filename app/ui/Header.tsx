import Link from "next/link";

// session
import { getLoggedInUserId } from "@/lib/session";

// ui
import LogoutButton from "./auth/LogoutButton";

export default async function Header() {
  const _id = await getLoggedInUserId();
  console.log(_id);
  return (
    <header className="flex items-center justify-between">
      {/* left */}
      <div>left</div>
      {/* right */}
      <div>
        {_id ? (
          <div>
            <LogoutButton />
          </div>
        ) : (
          <div>
            <Link href={"/login"}>Login</Link>
            <Link href={"/signup"}>Signup</Link>
          </div>
        )}
      </div>
    </header>
  );
}
