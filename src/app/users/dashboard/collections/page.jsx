import Header from "@/components/Dashboard/Header";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = async () => {
  const user = await authUserSession();
  const collections = await prisma.collection.findMany({
    where: { user_email: user.email },
  });

  return (
    <section className="mt-4 px-4 w-full">
      <Header title={"My Collections"} />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4">
        {collections.map((collection, index) => {
          return (
            <Link
              key={index}
              href={`/anime/${collection.anime_mal_id}`}
              className="relative"
            >
              <Image
                src={collection.anime_image}
                alt={collection.anime_title}
                className="w-full"
                width={350}
                height={350}
              />
              <div className="absolute bottom-0 w-full h-16 flex items-center justify-center bg-color-accent">
                <h5 className="text-xl">{collection.anime_title}</h5>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Page;
