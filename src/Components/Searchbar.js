import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Searchbar = (props) => {
  const [name, setName] = useState("");
  const [apiKey, setApiKey] = useState("AIzaSyByH6sN89SmGJNO0uGjNrtXXs5QdExiiHw");
  const [data,setData] = useState([]);
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + name + "&key=" + apiKey + "&maxResults=40")
        .then(res => { 
            setData(res.data.items);
            navigate('/booklist');
        })
        .catch(error => {
            console.log(error);
        })
   
  }
  return (
    <div className={`${props.cname}`}>
      <input
        type="text"
        onChange={(event) => {
          setName(event.target.value);
        }}
        className={`text-[#000] p-1 border-2 rounded-lg border-black ${props.inp_cname}`}
        placeholder="Search Book"
      />
      
      <button className={`bg-[#1FAA59] text-white font-semibold text-lg ml-1 rounded p-.5 px-2 ${props.btn_cname}`} onClick={handleSearch}>Search</button>
      
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
