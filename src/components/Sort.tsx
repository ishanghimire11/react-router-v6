import React from 'react';

interface SortProps {
  options: string[]; 
}

const Sort: React.FC<SortProps> = ({ options }) => { 
  return (
    <div>
      <select className='flex-1 hidden py-2 pl-3 pr-10 text-gray-700 transition-colors border-0 border-gray-300 rounded-md cursor-pointer ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-gray-300 hover:border-gray-400 sm:text-sm sm:leading-6 lg:block bg-inherit'>
        {options.map((option: string) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Sort;
