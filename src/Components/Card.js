import React from 'react'
import Modal from './Modal/Modal'
const Card = (props) => {
  return (
    
    <div className='w-[300px] sm:w-[400px] flex flex-row gap-5 justify-center items-center '>
        <img src={props.image} className="w-1/3 h-40" alt="book-image" />
        <div className='w-2/3 flex flex-col justify-between min-h-[100px] items-baseline'>
        <p className='font-semibold  text-[#13334c]'>{props.title}</p>
        <Modal sale={props.saleability} title={props.title} desc={props.desc} buy={props.buy}/>
        </div>
    </div>
  )
}

export default Card