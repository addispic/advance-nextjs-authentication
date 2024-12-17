import Link from "next/link";
// ui
import GetUsername from "./GetUsername";
import GetProfile from "./GetProfile";

export default function GetUsernameAndProfile({
  _id,
  flip,
}: {
  _id: string;
  flip?: boolean | undefined;
}) {
  return (
    <Link
      href={"/users/profiles"}
      className="flex items-center gap-x-1.5 text-sm text-green-600 transition-colors ease-in-out duration-150 hover:text-green-500"
    >
      {flip ? (
        <>
          {/* username */}
          <GetUsername _id={`${_id}`} />
          {/* profile */}
          <GetProfile _id={`${_id}`} />
        </>
      ) : (
        <>
          {/* profile */}
          <GetProfile _id={`${_id}`} />
          {/* username */}
          <GetUsername _id={`${_id}`} />
        </>
      )}
    </Link>
  );
}
