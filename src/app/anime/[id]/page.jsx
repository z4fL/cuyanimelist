import { getAnimeResponse } from "@/libs/api-libs";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import Image from "next/image";
import React from "react";
import CollectionButton from "@/components/AnimeList/CollectionButton";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import CommentInput from "@/components/AnimeList/CommentInput";
import CommentBox from "@/components/AnimeList/CommentBox";

const Page = async ({ params: { id } }) => {
  const { data } = await getAnimeResponse(`anime/${id}`);
  const user = await authUserSession();
  const collection = await prisma.collection.findFirst({
    where: { user_email: user?.email, anime_mal_id: id },
  });

  return (
    <>
      <div className="pt-4 px-4">
        <h3 className="text-2xl text-color-primary">
          {data.title} - {data.year}
        </h3>
        {!collection && user && (
          <CollectionButton
            anime_mal_id={id}
            user_email={user?.email}
            anime_image={data.images.webp.image_url}
            anime_title={data.title}
          />
        )}
      </div>
      <div className="pt-4 px-4 flex gap-2 text-color-primary">
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary">
          <h3>Peringkat</h3>
          <p>{data.rank}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary">
          <h3>Skor</h3>
          <p>{data.score}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary">
          <h3>Anggota</h3>
          <p>{data.members}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary">
          <h3>Total Episode</h3>
          <p>{data.episodes}</p>
        </div>
      </div>
      <div className="pt-4 px-4 flex sm:flex-nowrap flex-wrap gap-2 text-color-primary">
        <Image
          src={data.images.webp.image_url}
          alt={data.images.jpg.image_url}
          width={250}
          height={250}
          className="w-full rounded object-cover"
        />
        <p className="text-justify text-xl">{data.synopsis}</p>
      </div>
      <div className="px-4 py-2">
        <h3 className="text-color-primary text-2xl">Komentar</h3>
        <CommentBox anime_mal_id={id} />

        {user && (
          <CommentInput
            anime_mal_id={id}
            anime_title={data.title}
            user_email={user?.email}
            username={user?.name}
          />
        )}
      </div>
      <div>
        <VideoPlayer youtubeId={data.trailer.youtube_id} />
      </div>
    </>
  );
};

export default Page;
