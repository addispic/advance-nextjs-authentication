"use client";
import { useEffect } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

// ui
import SingleIdea from "./SingleIdea";
import { getLoggedInUserId } from "@/lib/session";

// ideas
export interface Idea {
  _id: string;
  author: string;
  text: string;
  image?: string;
  createdAt: string;
  updatedAt: string;
}

export default function IdeasList() {
  const { data: ideas, isPending } = useQuery({
    queryKey: ["ideas"],
    queryFn: async () => {
      return (await axios.get<Idea[]>("http://localhost:3000/api/ideas")).data;
    },
  });
  if (isPending) return <h3 className="flex-1">Loading ....</h3>;

  return (
    <div className="flex-1 max-h-[89vh] overflow-y-auto pt-1.5">
      {ideas?.length ? (
        <div>
          {ideas.map((idea: Idea) => {
            return <SingleIdea key={idea._id} idea={idea} />;
          })}
        </div>
      ) : (
        <div>No Ideas Yet</div>
      )}
    </div>
  );
}
