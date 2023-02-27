import React from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
const Modal = (props) => {
  return (
    <Popup
        trigger={<button className=' text-white font-semibold py-0.5 px-1 rounded bg-[#1FAA59]'>More Info</button>}
        modal
        nested
    >
        {close => (
            <div className='px-2 py-4 bg-[#FAF8E3]'>
               <div className='flex flex-row justify-between items-center'>
                <div className='inline text-center text-2xl font-bold'> {props.title} </div>
                <button className="text-3xl text-[#7e7979]" onClick={close}>
                    &times;
                </button>
                </div>
                <hr />
                <div className='py-2'>
                    
                    <p>{props.desc}</p>
                </div>
                {
                    props.sale !== 'NOT_FOR_SALE'?
                
                    <div className='text-center'>
                        <a href={props.buy} className='text-white font-semibold py-1 px-2 rounded bg-[#1FAA59]' >Buy Now</a>
                    </div>:""
                }
            </div>
            
        )}

    </Popup>
  )
}

export default Modal