import React from 'react'

const Card = (props) => {
  return (
    
    <div className='w-[300px] sm:w-[400px] flex flex-row gap-5 justify-center items-center'>
        <img src={props.image} className="w-1/3 h-40" alt="book-image" />
        <p className='font-semibold w-2/3'>{props.title}</p>
    </div>
  )
}

export default Card