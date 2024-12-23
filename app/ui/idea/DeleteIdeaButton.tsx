"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
// icons
import { RiDeleteBinLine } from "react-icons/ri";

export default function DeleteIdeaButton({ _id }: { _id: string }) {
  // states
  const [isPending, setIsPending] = useState(false);

  //   hooks
  const router = useRouter();

  //   delete idea handler
  const deleteIdeaHandler = async () => {
    setIsPending(true);
    const response = await axios.delete(
      `http://localhost:3000/api/ideas/${_id}`
    );
    if (response?.data?.success) {
      router.refresh();
    }
    setIsPending(false);
  };

  return (
    <button
      onClick={deleteIdeaHandler}
      disabled={isPending}
      className="text-lg text-neutral-400 transition-colors ease-in-out duration-150 hover:text-red-500 shrink-0"
    >
      {isPending ? (
        <div className="w-[18px] aspect-square border-4 border-red-500 border-r-transparent animate-spin rounded-full" />
      ) : (
        <RiDeleteBinLine />
      )}
    </button>
  );
}
