"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleEnterKey = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearch(event);
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();

    const keyword = searchRef.current.value;
    if (!keyword || keyword.trim() == "") {
      router.push(`/search/${keyword}`);
    }
  };

  return (
    <div className="relative">
      <input
        ref={searchRef}
        placeholder="Cari anime..."
        className="w-full p-2 rounded"
        onKeyDown={handleEnterKey}
      />
      <button onClick={handleSearch} className="absolute top-1 end-2">
        <MagnifyingGlass size={32} />
      </button>
    </div>
  );
};

export default InputSearch;
