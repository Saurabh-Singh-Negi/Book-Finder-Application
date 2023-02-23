import React from "react";
import Searchbar from "./Searchbar";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav className="flex flex-row items-center justify-between px-2 sm:px-24 h-[60px] text-white bg-[#1F2029]">
        <div className="mx-auto sm:m-2">
          <h1 className="font-extrabold text-2xl cursor-pointer" onClick={() => navigate("/")}>BookFinder</h1>
        </div>

        <Searchbar cname="hidden sm:block m-2"/>
      </nav>
    </>
  );
};

export default Navbar;
