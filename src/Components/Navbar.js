import React from "react";
import Searchbar from "./Searchbar";
const Navbar = () => {
  return (
    <>
      <nav className="flex flex-row justify-between bg-[#EAEAEC] p-2">
        <div>
          <h1 className="font-extrabold text-2xl cursor-pointer">BookFinder</h1>
        </div>

        <Searchbar />
      </nav>
    </>
  );
};

export default Navbar;
