"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
// icons
import { MdOutlineDeleteOutline } from "react-icons/md";
export default function DeleteUser({ _id }: { _id: string }) {
  // hooks
  const router = useRouter();
  // delete user handler
  const deleteUserHandler = async () => {
    const response = await axios.delete(
      `http://localhost:3000/api/users/${_id}`
    );
    if (response.data?.success) {
      router.refresh();
    }
  };
  return (
    <button onClick={deleteUserHandler}>
      <MdOutlineDeleteOutline className="text-xl text-neutral-400 transition-colors ease-in-out duration-150 hover:text-red-500" />
    </button>
  );
}
