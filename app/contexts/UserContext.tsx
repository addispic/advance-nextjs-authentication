"use client";
import React, { useState, useContext, createContext } from "react";
import axios from "axios";

// interface
// user
export interface UserInterface {
  _id: string;
  username: string;
  createdAt: string;
}

// user context
interface UserContextType {
  users: UserInterface[];
  refresher: boolean;
  getAllUsers: () => Promise<void>;
  addNewUser: (username: string) => Promise<void>;
}

// context
const UserContext = createContext<UserContextType | undefined>(undefined);

// provider
export const UserContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [users, setUsers] = useState<UserInterface[]>([]);
  const [refresher,setRefresher] = useState(false)

//   actions
// get all users
const getAllUsers = async () => {
    const response = await axios.get("http://localhost:3000/api/users")
    setRefresher(true)
    if(response.data?.allUsers){
        setUsers(response.data?.allUsers)
        setRefresher(false)
    }
} 

// add new user 
const addNewUser = async (username: string) => {
    const formData = new FormData()
    formData.append("username",username)
    await axios.post("http://localhost:3000/api/users",formData) 
    setRefresher(true)
}
  return (
    <UserContext.Provider value={{ users,getAllUsers, refresher, addNewUser }}>{children}</UserContext.Provider>
  );
};

// custom hooks
export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context)
    throw new Error("useUserContext must be used within a UserContextProvider");
  return context;
};
