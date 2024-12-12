"use client";
import React, { useState } from "react";

export default function Profile() {
  const [file, setFile] = useState<File>();

  // submit handler
  const submitHandler = async () => {
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "haddis");

      const data = await fetch(
        "https://api.cloudinary.com/v1_1/diyn4opd7/image/upload",
        {
          method: "POST",
          body: formData,
        }
      ).then((r) => r.json());
      console.log(data);
    }
  };
  return (
    <div>
      <div>
        <input
          onChange={(e) => setFile(e.target.files?.[0])}
          type="file"
          name="file"
        />
        <button onClick={submitHandler}>upload</button>
      </div>
      Profile Page over here
    </div>
  );
}
