"use client";
import { useRef, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
// icons
import { GrSend } from "react-icons/gr";
export default function AddNewPost() {
  // query
  const queryClient = useQueryClient();
  // mutation
  const addPostMutation = useMutation({
    mutationFn: ({ text }: { text: string }) =>
      fetch("http://localhost:3000/api/posts", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ text }),
      }).then((res) => res.json()),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      setText("");
      if (textRef.current) {
        textRef.current.style.height = "24px";
      }
    },
  });
  // states
  const [text, setText] = useState("");
  // ref
  const textRef = useRef<HTMLTextAreaElement | null>(null);
  // function
  const adjustHeight = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (textRef?.current) {
      textRef.current.style.height = "24px";
      textRef.current.style.height = `${textRef.current.scrollHeight}px`;
    }
  };

  //   add post handler
  const addNewPostHandler = () => {
    addPostMutation.mutate({ text });
  };
  return (
    <div className="px-3 py-1.5">
      <div className="flex items-end gap-x-3">
        <div className="flex-1 flex items-center border border-neutral-400 rounded-md px-1 pt-1 py-0.5">
          <textarea
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              adjustHeight(e);
            }}
            ref={textRef}
            className="w-full focus:ring-0 focus:outline-none border-none bg-transparent h-[24px] text-sm p-0 resize-none"
            placeholder="Post text..."
          ></textarea>
        </div>
        <button
          onClick={() => {
            addNewPostHandler();
          }}
        >
          <GrSend className="text-2xl text-neutral-600" />
        </button>
      </div>
    </div>
  );
}
