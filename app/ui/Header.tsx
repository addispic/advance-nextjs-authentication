import Link from "next/link"

export default function Header(){
    return (
        <header className="flex items-center justify-between">
            <div></div>
            <div className="flex items-center gap-x-3 text-sm text-neutral-700">
                <Link href={"/users/login"}>Login</Link>
                <Link href={"/users/signup"}>Signup</Link>
            </div>
        </header>
    )
}