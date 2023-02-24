import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Searchbar from './Searchbar'
import Header from './Header/Header'
const Home = () => {
  return (
    <div className="flex flex-col min-h-screen justify-between bg-[#faf8e3]">
        <Navbar />
        
        <Header/>
        <Searchbar cname="flex flex-col mx-16  sm:flex-row justify-center" inp_cname="w-auto sm:w-[400px] h-[50px] mb-1" btn_cname="block sm:inline px-6"/>      
        <Footer />
    </div>
  )
}

export default Home