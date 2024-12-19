import Link from "next/link";
export default function UserProfileLinks() {
  return (
    <div className="pt-0.5 flex items-center justify-between px-[5%]">
      {/* left */}
      <div>left</div>
      {/* right-links */}
      <div className="flex items-center justify-end gap-x-3">
        <div>
          <Link href={"/users/profiles"}>Blogs</Link>
        </div>
        <div>
          <Link href={"/users/profiles/favorites"}>Favorites</Link>
        </div>
        <div>
          <Link href={"/users/profiles/images"}>Images</Link>
        </div>
      </div>
    </div>
  );
}
