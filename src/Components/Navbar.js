import React from "react";
import Searchbar from "./Searchbar";

const Navbar = () => {
  return (
    <>
      <nav className="flex flex-row justify-between bg-[#EAEAEC] p-2">
        <div>
          <h1>BookFinder</h1>
        </div>

        <Searchbar />
      </nav>
    </>
  );
};

export default Navbar;
