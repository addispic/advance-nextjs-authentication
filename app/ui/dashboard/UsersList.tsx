import axios from "axios";
import {formatDistanceToNow} from 'date-fns'
// icons
import { PiUserLight } from "react-icons/pi";
// ui
// dashboard
import DeleteUser from "./DeleteUser";
export default async function UsersList() {
  const response = await axios.get("http://localhost:3000/api/users");
  const users = response.data?.users;
  return (
    <div className="flex-1">
      {users?.length > 0 ? (
        <>
          {users?.map(
            (user: { _id: string; username: string; createdAt: string }) => {
              return (
                <div
                  key={user._id}
                  className="flex items-center justify-between py-1 mb-0.5 border-b border-neutral-200"
                >
                  {/* user detail */}
                  <div className="flex items-center gap-x-1.5 text-sm text-neutral-700">
                    <PiUserLight className="text-xl"/>
                    <div>
                      <p>{user.username}</p>
                      <p className="text-xs text-neutral-500 -mt-1">{formatDistanceToNow(new Date(user.createdAt),{addSuffix: true})}</p>
                    </div>
                  </div>
                  {/* actions */}
                  <DeleteUser _id={user._id}/>
                </div>
              );
            }
          )}
        </>
      ) : (
        <div>
          <span className="text-sm text-neutral-500">No users to display</span>
        </div>
      )}
    </div>
  );
}
