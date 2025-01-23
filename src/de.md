Quiero que este componente de react con tailwind y typescript este en el medio de la pantalla como el de google y sea responsive tambien como el de ggogle y que el color al tocar el buscador sea 
231 109 87 en rgb

import React from 'react';

const InputSearch = () => {
  return (
    <div className="flex justify-center items-center h-screen"> 
      <form className="relative w-full max-w-md"> 
        <button 
          className="absolute left-3 top-1/2 -translate-y-1/2 p-1" 
          type="button"
        >
          <svg 
            width={17} 
            height={16} 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            role="img" 
            aria-labelledby="search" 
            className="w-5 h-5 text-gray-700"
          >
            <path 
              d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" 
              stroke="currentColor" 
              strokeWidth="1.333" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
            />
          </svg>
        </button>
        <input 
          className="w-full rounded-full px-10 py-3 border-2 border-gray-200 
                  focus:border-red-500 focus:outline-none placeholder-gray-400 
                  transition-all duration-300 shadow-md" 
          placeholder="Search..." 
          required 
          type="text" 
        />
        <button 
          type="reset" 
          className="absolute right-3 top-1/2 -translate-y-1/2 p-1"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-5 h-5 text-gray-700" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M6 18L18 6M6 6l12 12" 
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default InputSearch;

export default InputSearch;
