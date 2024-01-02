import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const ListItem = () => {
    return (
<div className="w-full border border-black h-1/6 pr-4 flex items-center justify-between px-5 py-2.5 relative rounded group overflow-hidden font-medium group">
  <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-red-400 group-hover:h-full opacity-90"></span>

  <div className='pl-28 relative group-hover:text-white text-black'>
    <p className="text-5xl font-bold">Antigone Communication</p>
  </div>
  <div className='pr-40 relative group-hover:text-white text-black text-3xl'>
    <FaArrowRight />
  </div>
</div>

    );
};

export const ListComponent = () => {
    return (
        <div className="h-screen flex flex-col">
            {[...Array(6)].map((_, index) => (
                <ListItem key={index} />
            ))}
        </div>
    );
};

