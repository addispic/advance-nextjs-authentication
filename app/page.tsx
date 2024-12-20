"use client";
import { useState } from "react";
import axios from "axios";
import {
  QueryClient,
  QueryClientProvider,
  useMutation,
  useQuery,
} from "@tanstack/react-query";

// interface
interface User {
  _id: string;
  first_name: string;
  last_name: string;
}

// query client
const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <Users />
    </QueryClientProvider>
  );
}

// user
function Users() {
  // states
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const {
    data: users,
    isPending: isUsersPending,
    isError: isUsersError,
  } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: () =>
      fetch("http://localhost:3000/api/users").then((res) => res.json()),
  });
  // add new user
  const addNewUserMutation = useMutation({
    mutationFn: (data: FormData) => {
      return axios.post("http://localhost:3000/api/users", data);
    },
  });
  if (isUsersPending) return <h3>Loading ....</h3>;
  if (isUsersError) return <h3>Fetching users data error</h3>;

  // add new user form handler
  const addNewUserHandler = () => {
    const formData = new FormData();
    formData.append("first_name", firstName);
    formData.append("last_name", lastName);
    addNewUserMutation.mutate(formData);
    setFirstName("");
    setLastName("");
  };
  return (
    <div className="w-screen h-screen overflow-hidden flex gap-12">
      {/* users list */}
      <div className="w-1/2 h-screen overflow-y-auto p-5">
        <h3 className="font-medium underline uppercase text-xl">Users</h3>
        <div>
          {users.map((user: User) => {
            return (
              <div key={user._id}>
                {user.first_name} {user.last_name}
              </div>
            );
          })}
        </div>
      </div>
      {/* add new user */}
      <div className="w-1/2 p-5">
        <div className="p-3 border border-neutral-200 rounded-md">
          <h3 className="font-medium underline uppercase text-xl mb-3 flex items-center justify-between">
            Add New User
          </h3>
          {addNewUserMutation.isPending && <h3>Uploading ...</h3>}
          {addNewUserMutation.isError && <h3>Add New User Failed</h3>}
          <div>
            {/* first name */}
            <div className="w-[75%] border border-neutral-300 rounded-md px-3 py-1 text-sm mb-3">
              <input
                className="w-full focus:outline-none focus:ring-0 border-none bg-transparent"
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            {/* last name */}
            <div className="w-[75%] border border-neutral-300 rounded-md px-3 py-1 text-sm mb-3">
              <input
                className="w-full focus:outline-none focus:ring-0 border-none bg-transparent"
                type="text"
                placeholder="Last name"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <button
              onClick={addNewUserHandler}
              className="my-3 border border-neutral-500 rounded-md px-3 py-1"
            >
              add user
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
