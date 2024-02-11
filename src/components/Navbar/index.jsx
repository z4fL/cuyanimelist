import Link from "next/link";
import React from "react";
import InputSearch from "./InputSearch";
import UserActionButton from "./UserActionButton";

const Navbar = () => {
  return (
    <header className="bg-color-accent">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-2 p-4">
        <Link href="/" className="font-bold text-2xl">
          AnimeList
        </Link>
        <InputSearch />
        <UserActionButton />
      </div>
    </header>
  );
};

export default Navbar;
