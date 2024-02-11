import Image from "next/image";
import Link from "next/link";
import React from "react";

const AnimeList = ({ api }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 px-4">
      {api.data?.map((anime) => {
        return (
          <Link
            key={anime.mal_id}
            href={`/anime/${anime.mal_id}`}
            className="cursor-pointer text-color-primary hover:text-color-accent transition-all"
          >
            <Image
              src={anime.images.webp.image_url}
              alt={anime.title}
              className="w-full max-h-64 object-cover"
              width={350}
              height={350}
            />
            <h1 className="font-bold md:text-xl text-md p-4">{anime.title}</h1>
          </Link>
        );
      })}
    </div>
  );
};

export default AnimeList;
