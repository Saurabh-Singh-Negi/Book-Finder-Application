import React from "react";
import Searchbar from "./Searchbar";
const Navbar = () => {
  return (
    <>
      <nav className="flex flex-row justify-between bg-[#EAEAEC] p-2">
        <div className="mx-auto sm:m-2">
          <h1 className="font-extrabold text-2xl cursor-pointer">BookFinder</h1>
        </div>

        <Searchbar cname="hidden sm:block m-2"/>
      </nav>
    </>
  );
};

export default Navbar;
