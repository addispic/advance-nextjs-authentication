import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      {/* left */}
      <div>left</div>
      {/* right */}
      <div>
        <div>
          <Link href={"/login"}>Login</Link>
          <Link href={"/signup"}>Signup</Link>
        </div>
      </div>
    </header>
  );
}
