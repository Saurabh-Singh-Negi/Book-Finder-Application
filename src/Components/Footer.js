import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <>
        <footer className='bg-[#1F2029] text-white flex flex-col justify-center items-center p-1'>
            <p className='inline-block text-lg font-semibold'>Made by Saurabh : <span>Ineuron &copy; 2023</span> </p>
            
            <div className='flex gap-1'>
                <a href='https://github.com/Saurabh-Singh-Negi' target="_blank" className='text-4xl w-[40px] block'><FaGithub /></a>
                <a href='https://www.linkedin.com/in/saurabh-singh-negi-18b320197/' target="_blank" className='text-4xl w-[40px]  block'><FaLinkedin /></a>
            </div>
        </footer>
    </>
  )
}

export default Footer