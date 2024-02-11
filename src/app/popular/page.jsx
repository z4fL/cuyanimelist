"use client";

import AnimeList from "@/components/AnimeList";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import React, { useEffect, useState } from "react";
import { getAnimeResponse } from "../../libs/api-libs";

const page = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  useEffect(() => {
    fetchData();
  }, [page]);

  const fetchData = async () => {
    const popularAnime = getAnimeResponse("top/anime", `page=${page}`);
    setTopAnime(popularAnime);
  };

  return (
    <>
      <HeaderMenu title={`Anime Terpopuler #${page}`} />
      <AnimeList api={topAnime} />
      <Pagination
        page={page}
        setPage={setPage}
        lastPage={topAnime?.pagination?.last_visible_page}
      />
    </>
  );
};

export default page;
