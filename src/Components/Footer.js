import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <>
        <footer className='bg-[#EAEAEC]  flex flex-col justify-center items-center p-1'>
            <p className='text-lg font-semibold'>Made by Saurabh Singh Negi</p>
            <p className='text-lg'>Ineuron &copy; 2023</p>
            <div className='flex gap-1'>
                <a href='https://github.com/Saurabh-Singh-Negi' target="_blank" className='text-4xl w-[40px] block'><FaGithub /></a>
                <a href='https://www.linkedin.com/in/saurabh-singh-negi-18b320197/' target="_blank" className='text-4xl w-[40px]  block'><FaLinkedin /></a>
            </div>
        </footer>
    </>
  )
}

export default Footer