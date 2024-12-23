import { formatDistanceToNow } from "date-fns";
// icons
import { PiUser } from "react-icons/pi";
import { IoIosTimer } from "react-icons/io";
import { AiOutlineLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { AiOutlineComment } from "react-icons/ai";
// interface
import { Idea } from "./IdeasList";
// ui
import DeleteIdeaButton from "./DeleteIdeaButton";

export default function SingleIdea({ idea }: { idea: Idea }) {
  console.log("Server or Client");
  return (
    <div className="mb-5 pb-1.5 border-b border-neutral-200 text-sm">
      {/* idea */}
      <div className="mb-1">
        {/* image */}
        {idea?.image && <div>image</div>}
        {/* text */}
        <div>
          <p>{idea.text}</p>
        </div>
      </div>
      {/* footer */}
      <div className="flex items-center justify-between gap-x-[1%] pt-1.5">
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
        <div className="flex items-center justify-between gap-x-3">
          {/* like */}
          <div className="flex items-center gap-x-0.5 cursor-pointer ">
            <span className=" text-xs">3</span>
            <AiOutlineLike className="text-lg text-neutral-500" />
          </div>
          {/* dislike */}
          <div className="flex items-center gap-x-0.5 cursor-pointer ">
            <span className=" text-xs">1</span>
            <AiOutlineDislike className="text-lg text-neutral-500" />
          </div>
          {/* favorite */}
          <div className="flex items-center gap-x-0.5 cursor-pointer ">
            <span className=" text-xs">5</span>
            <MdFavoriteBorder className="text-lg text-neutral-500" />
          </div>
          {/* comments */}
          <div className="flex items-center gap-x-0.5 cursor-pointer ">
            <span className=" text-xs">5 comments</span>
            <AiOutlineComment className="text-lg text-neutral-500" />
          </div>
          {/* delete */}
          <DeleteIdeaButton author={idea.author} _id={idea._id}/>
        </div>
      </div>
    </div>
  );
}
