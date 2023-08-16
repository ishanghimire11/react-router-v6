import React from 'react'
import { Button } from './Button';

interface SearchProps{
    placeholder?: string;
    type: string;
    onClick?: () => string;
}

const Search: React.FC<SearchProps> = ({type,placeholder}) => {

  return (
<form className='w-full rounded-lg focus:border-red-500 focus:border-b-2'>
  <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
    Search
  </label>
  <div className="relative flex">
    <div className="absolute left-0 flex items-center pl-3 pointer-events-none top-3">
      <svg
        className="w-4 h-4 text-gray-500 dark:text-gray-400"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 20"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
        />
      </svg>
    </div>
    <input
      type={type}
      id="search"
      className="block w-full p-2 pl-10 bg-transparent border-b-2 border-gray-300 outline-none focus:duration-500 focus:border-red-500 hover:border-red-500 hover:duration-500 hover:ease-in-out focus:ease-in-out"
      placeholder={placeholder}
      required
      autoComplete='off'
    />
  </div>
</form>


  )
}

export default Search