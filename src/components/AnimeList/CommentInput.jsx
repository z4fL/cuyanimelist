"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const CommentInput = ({ anime_mal_id, anime_title, user_email, username }) => {
  const [comment, setComment] = useState("");
  const [isCreated, setIsCreated] = useState(false);

  const router = useRouter();

  const handleInput = (event) => {
    setComment(event.target.value);
  };

  const handlePosting = async (event) => {
    event.preventDefault();

    const data = { anime_mal_id, anime_title, user_email, comment, username };
    const response = await fetch("/api/v1/comment", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const postComment = await response.json();

    if (postComment.status == 200) {
      setIsCreated(postComment.isCreated);
      setComment("");
      router.refresh();
    }
    return;
  };

  return (
    <div className="flex flex-col gap-2">
      {isCreated && <p className="text-color-primary">Postingan terkirim...</p>}
      <textarea
        onChange={handleInput}
        value={comment}
        className="w-full h-32 text-xl p-4"
      />
      <button
        onClick={handlePosting}
        className="w-52 py-2 px-3 bg-color-accent"
      >
        Posting komentar
      </button>
    </div>
  );
};

export default CommentInput;
