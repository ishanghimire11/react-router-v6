import React from 'react'
// import Pokeball from "../assets/pokeBall.svg"
import Pokeball from "../assets/tr.svg"

const Header = () => {
  return (
    <div className='w-full h-[80px] bg-red-600 flex items-center justify-center gap-x-4'>
        <img src={Pokeball} alt="pokeball" className='h-[50px] w-[50px] hover:rotate-180 duration-300'/>
    </div>
  )
}

export default Header