
// ui
// dashboard
import AddNewUser from "./AddNewUser";
import UsersList from "./UsersList";
export default function RightSideBar() {
  return (
    <div className="w-72 p-1.5 flex">
      <div className="flex-1 bg-neutral-100 flex flex-col p-3 rounded-md overflow-hidden">
        {/* add new user */}
        <AddNewUser />
        {/* users list */}
        <UsersList />
      </div>
    </div>
  );
}
