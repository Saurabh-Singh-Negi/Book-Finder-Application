import React from 'react'
import book from "../../Images/book.jpeg"
import './Header.css'
const Header = () => {
  return (
    <>
    <div className='flex flex-col gap-4 items-center text-center  w-[80%] mx-auto '>
        <h1 className='font-bold text-[#13334c] text-4xl sm:text-6xl'><i>Deciding what to read next?</i></h1>
        <div className='flex flex-col sm:flex-row-reverse items-center gap-2 sm:gap-14 justify-around w-[95%]'>
          <p className='text-[#3e5e77] text-xl sm:text-3xl font-semibold text-center'><i> You're in the right place.<span > Tell us what titles or genres you've enjoyed in the past,</span> <span>and we'll give you surprisingly insightful recommendations.</span></i></p>
          <img src={book} className="w-[450px]" alt="" />
        </div>
        </div>
    </>
  )
}

export default Header