import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Searchbar from './Searchbar'

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen justify-between">
        <Navbar />
        <Searchbar />
        <Footer />
    </div>
  )
}

export default Home