import React from 'react';
import LoadingImage from "../assets/pokeball.gif"

const Waiting = () => {
  return (
    <div className='flex items-center justify-center w-full h-full'>
        <img src={LoadingImage} alt="Please Wait" className='w-[120px] h-[120px]'/>
        <p>Please Wait...</p>
    </div>
  )
}

export default Waiting;