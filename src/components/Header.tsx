import React from 'react'
import { Link, NavLink } from 'react-router-dom'
// import Logo from "../assets/pikachu-logo.png"


const linkStyles = "font-semibold hover:underline"

const Header = () => {
  return (
    <div className='bg-red-600'>
      <div className='flex items-center justify-between py-8 px-12 text-white max-w-[1280px] mx-auto'>
        <p className='text-xl font-semibold'><Link to="/" className='flex items-center justify-center'>
          <img src="https://seeklogo.com/images/P/pikachu-logo-619ACB690E-seeklogo.com.png" alt="logo" className='h-[60px] w-[60px] -scale-x-100'/>
          <span>POKEDEX</span>
          </Link></p>
        <ul className='flex items-center justify-center gap-x-8'>
            <li>
                <NavLink to="/about" className={linkStyles}>About</NavLink>
            </li>
            <li>
                <NavLink to="/pokemons" className={linkStyles}>Pokemons</NavLink>
            </li>
        </ul>
        </div>
    </div>
  )
}

export default Header