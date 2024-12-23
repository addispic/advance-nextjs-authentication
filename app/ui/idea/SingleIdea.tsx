import { formatDistanceToNow } from "date-fns";
// icons
import { PiUser } from "react-icons/pi";
import { IoIosTimer } from "react-icons/io";
// interface
import { Idea } from "./IdeasList";
export default function SingleIdea({ idea }: { idea: Idea }) {
  return (
    <div className="mb-3 pb-1.5 border-b border-neutral-200 text-sm">
      {/* idea */}
      <div className="mb-1">
        {/* image */}
        {idea?.image && <div>image</div>}
        {/* text */}
        <div>
          <p>{idea.text}</p>
        </div>
      </div>
      {/* actions */}
      <div className="flex items-center gap-x-[1%]">
        {/* author & time */}
        <div className="flex items-center gap-x-3">
          {/* author */}
          <div className="flex items-center gap-x-1.5 text-green-500 transition-colors ease-in-out duration-150 hover:text-green-600 cursor-pointer">
            <PiUser />
            <span>Haddis</span>
          </div>
          {/* date */}
          <div className="flex items-center gap-x-1 text-neutral-500 text-xs">
            <IoIosTimer />
            <span>
              {formatDistanceToNow(new Date(idea.createdAt), {
                addSuffix: true,
              })}
            </span>
          </div>
        </div>
        {/* actions */}
        <div>actions</div>
      </div>
    </div>
  );
}
