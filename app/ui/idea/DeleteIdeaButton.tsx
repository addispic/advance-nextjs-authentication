"use client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
// icons
import { RiDeleteBinLine } from "react-icons/ri";

export default function DeleteIdeaButton({
  author,
  _id,
}: {
  author: string;
  _id: string;
}) {
  // query client
  const queryClient = useQueryClient();
  // hooks
  const deleteIdeaMutation = useMutation({
    mutationFn: (_id: string) =>
      axios.delete(`http://localhost:3000/api/ideas/${_id}`),
    onSuccess: () => {
      console.log("Deleted Successfully");
      queryClient.invalidateQueries({ queryKey: ["ideas"] });
    },
    onError: (error: AxiosError) => {
      console.log(error);
    },
  });
  const { data: userId } = useQuery({
    queryKey: ["user-id"],
    queryFn: () =>
      fetch("http://localhost:3000/api/user-id").then((res) => res.json()),
  });
  if (author !== userId) return null;
  //   delete idea handler
  const deleteIdeaHandler = () => {
    deleteIdeaMutation.mutate(_id);
  };
  return (
    <button
      onClick={deleteIdeaHandler}
      className="text-lg text-neutral-400 transition-colors ease-in-out duration-150 hover:text-red-500"
    >
      <RiDeleteBinLine />
    </button>
  );
}
