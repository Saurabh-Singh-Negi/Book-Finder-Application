import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Searchbar from './Searchbar'

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen justify-between">
        <Navbar />
        <Searchbar cname="flex flex-col mx-16 sm:flex-row justify-center" inp_cname="w-auto sm:w-[300px] h-10 mb-1" btn_cname="block sm:inline"/>      
        <Footer />
    </div>
  )
}

export default Home