import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { useEffect,useState } from 'react'
import axios from "axios";
import Card from './Card'
import Searchbar from './Searchbar'

const BookList = () => {
    const {name} = useParams();
    const [data,setData] = useState([]);
    const [apiKey, setApiKey] = useState("AIzaSyByH6sN89SmGJNO0uGjNrtXXs5QdExiiHw");

    useEffect(() => {
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + name + "&key=" + apiKey + "&maxResults=18")
        .then(res => {  
            console.log(res.data.items)
            // console.log(res.data.items[0].saleInfo.buyLink)  
            setData(res.data.items);            
        })
        .catch(error => {
            console.log(error);
        })
    },[name])
  return (
    <>
        <div className="flex flex-col min-h-screen justify-between bg-[#faf8e3] ">
        <Navbar />
        <Searchbar cname="sm:hidden flex flex-col mx-16 my-4 justify-center" inp_cname="w-auto sm:w-[300px] h-10 mb-1" btn_cname="block sm:inline"/>
        <div className='flex flex-row flex-wrap justify-center gap-2 m-10'>
        {
            
            data.map(ele => {
                return (
                    <div key={ele.id} >
                        <Card saleability={ele.saleInfo.saleability} buy={ele.saleInfo.buyLink} desc={ele.volumeInfo.description} image={ele.volumeInfo.imageLinks.thumbnail} title={ele.volumeInfo.title} />
                        
                    </div>
                )
            })
        }
        </div>
        
        <Footer />
        </div>
    </>
  )
}

export default BookList