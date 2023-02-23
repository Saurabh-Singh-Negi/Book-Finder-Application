import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const Searchbar = () => {
  const [name, setName] = useState("");
  const [apiKey, setApiKey] = useState("AIzaSyByH6sN89SmGJNO0uGjNrtXXs5QdExiiHw");
  const [data,setData] = useState([]);

  const handleSearch = (event) => {
    event.preventDefault();
    
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + name + "&key=" + apiKey + "&maxResults=40")
        .then(res => { 
            setData(res.data.items);
        })
        .catch(error => {
            console.log(error);
        })
   
  }
  return (
    <div>
      <input
        type="text"
        onChange={(event) => {
          setName(event.target.value);
        }}
        className="text-[#000]"
        placeholder="Search Book"
      />
      <button onClick={handleSearch}>Search</button>

      {
        data.map((ele) => (
            
            <div key={ele.id}>
                <p>Title: {ele.volumeInfo.title}</p>
            </div>
        ))
      }

    </div>
  );
};

export default Searchbar;
