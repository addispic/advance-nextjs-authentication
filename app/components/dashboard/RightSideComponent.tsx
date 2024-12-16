import axios from "axios";
import {formatDistanceToNow} from 'date-fns'

// icons
import { PiUser } from "react-icons/pi";
import { AiOutlineDelete } from "react-icons/ai";

// components
// dashboard
import RightSideComponentHeader from "./RightSideComponentHeader";

export default async function RightSideComponent() {
  const response = await axios.get("http://localhost:3000/api/users")
  console.log(response.data?.allUsers)
  return (
    <div className="w-64 h-full p-1.5">
      <div className="w-full h-full bg-neutral-100 rounded-md overflow-hidden">
        {/* header */}
        <RightSideComponentHeader />
        {/* lists */}
        <div className="p-1.5">
          {
            response.data?.allUsers?.length > 0 
            ?
            <>
            {response.data?.allUsers.map((userItem: {_id: string;username: string; createdAt: string}) => {
            return (
              <div
                key={userItem._id}
                className="p-0.5 flex items-center justify-between border-b border-neutral-200 pb-1 mb-0.5"
              >
                {/* user detail */}
                <div className="flex items-center gap-x-1.5 text-neutral-700 text-sm">
                  {/* icon */}
                  <div className="shrink-0">
                    <PiUser className="text-lg" />
                  </div>
                  {/* detail */}
                  <div>
                    <p>{userItem.username}</p>
                    <p className="text-xs -mt-1 text-neutral-500">
                      {formatDistanceToNow(new Date(userItem.createdAt),{addSuffix: true})}
                    </p>
                  </div>
                </div>
                {/* action */}
                <div>
                  <AiOutlineDelete className="text-lg text-neutral-400 transition-colors ease-in-out duration-150 hover:text-neutral-600 cursor-pointer" />
                </div>
              </div>
            );
          })}
            </>
            :
            <div>No Users Yet</div>
          }
          
        </div>
      </div>
    </div>
  );
}
