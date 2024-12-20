"use client";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";

// interface
interface Post {
  _id: string;
  text: string;
  createdAt: string;
}
export default function Posts() {
  const queryClient = useQueryClient();
  const deletePostMutation = useMutation({
    mutationFn: (_id: string) =>
      fetch(`http://localhost:3000/api/posts/${_id}`, {
        method: "DELETE",
      }).then((res) => res.json()),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
  const { data: posts } = useQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: () =>
      fetch("http://localhost:3000/api/posts").then((res) => res.json()),
  });
  console.log(posts);
  return (
    <div>
      {/* single post */}
      {posts?.map((post: Post) => {
        return (
          <div key={post._id} className="my-5">
            <div className="p-3 bg-neutral-50 rounded-md shadow-sm mb-3 text-sm">
              <p>
                {post.text.slice(0, 224)}
                <span className="mx-3 text-blue-600 cursor-pointer">
                  <Link href={"/post"}>more</Link>
                </span>
              </p>
            </div>
            <footer className="my-3 border-b-[.015rem] pb-1 flex items-center gap-x-3 text-sm text-neutral-500 border-neutral-300">
              <span>
                {formatDistanceToNow(new Date(post.createdAt), {
                  addSuffix: true,
                })}
              </span>
              <button
                onClick={() => {
                  deletePostMutation.mutate(post._id);
                }}
              >
                delete
              </button>
            </footer>
          </div>
        );
      })}
    </div>
  );
}
