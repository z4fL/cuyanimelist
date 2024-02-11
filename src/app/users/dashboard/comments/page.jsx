import Header from "@/components/Dashboard/Header";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import Link from "next/link";
import React from "react";

const Page = async () => {
  const user = await authUserSession();
  const comments = await prisma.comment.findMany({
    where: { user_email: user?.email },
  });

  return (
    <section className="mt-4 px-4 w-full">
      <Header title={"My Comments"} />

      <div className="grid grid-cols-1 gap-4 py-2">
        {comments.map((comment) => {
          return (
            <Link
              href={`anime/${comment.anime_mal_id}`}
              key={comment.id}
              className="text-color-dark bg-color-primary p-4"
            >
              <p className="text-sm">{comment.username}</p>
              <p className="italic">{comment.comment}</p>
            </Link>
          );
        })}
        <div></div>
      </div>
    </section>
  );
};

export default Page;
