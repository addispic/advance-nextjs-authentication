"use client";
import { useState, useRef, useEffect } from "react";
// icons
import { GrSend } from "react-icons/gr";
import { TiAttachmentOutline } from "react-icons/ti";
export default function AddNewIdeaForm() {
  // states
  // text
  const [text, setText] = useState("");
  //   focus
  const [focus, setFocus] = useState("");
  // reference
  // text area reference
  const textRef = useRef<HTMLTextAreaElement>(null);

  // effects
  // text area height handler
  useEffect(() => {
    if (textRef?.current) {
      textRef.current.style.height = "24px";
      textRef.current.style.height = `${textRef.current.scrollHeight}px`;
    }
  }, [text]);

  //   handles
  const submitFormHandler = () => {
    console.log({ text });
    setText("");
  };

  return (
    <div className="flex items-end gap-x-3 px-3 py-1 bg-white shadow-xl">
      {/* file picker */}
      <div className="text-3xl text-neutral-400 cursor-pointer">
        <TiAttachmentOutline />
      </div>
      {/* new text area */}
      <div
        className={`flex-1 border rounded-md flex items-center px-1 py-0.5 pt-1 ${
          focus === "text" || text ? "border-green-500" : "border-neutral-300"
        }`}
      >
        <textarea
          ref={textRef}
          className="w-full focus:outline-none focus:ring-0 border-none resize-none bg-transparent text-sm p-0 h-[24px]"
          name=""
          id=""
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          placeholder="your idea..."
          onFocus={() => {
            setFocus("text");
          }}
          onBlur={() => {
            setFocus("");
          }}
        ></textarea>
      </div>
      {/* send button */}
      <button
        onClick={submitFormHandler}
        className={`shrink-0 text-2xl ${
          text ? "text-green-500" : "text-neutral-500"
        }`}
      >
        <GrSend />
      </button>
    </div>
  );
}
