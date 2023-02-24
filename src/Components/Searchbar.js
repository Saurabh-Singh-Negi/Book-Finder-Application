import React, { useEffect } from "react";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
const Searchbar = (props) => {
  const [name, setName] = useState("");
  
  
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    if(name) {
      navigate(`/booklist/${name}`);
    }
        
  }
  return (
    <div className={`${props.cname}`}>
      <input
        type="text"
        onChange={(event) => {
          setName(event.target.value);
        }}
        className={`text-[#000] bg-[#f2f2f2] p-1 border-2 rounded-lg border-[#13334c] ${props.inp_cname}`}
        placeholder="Find your next book"
      />
      
      <button className={`bg-[#1FAA59] text-white font-semibold text-lg ml-1 rounded p-.5 px-2 ${props.btn_cname}`} onClick={handleSearch}>Search</button>

    </div>
  );
};

export default Searchbar;
