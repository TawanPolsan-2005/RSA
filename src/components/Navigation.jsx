import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  return (
    <nav className='flex flex-col items-center'>
      <ul className="flex space-x-24 justify-center mt-14 max-w-full text-sm tracking-wide leading-none text-center text-black whitespace-nowrap w-[238px]">
        <li className='relative text-lg w-fit block after:block after:content-[""] after:absolute after:h-[3px] after:bg-[#6C1E1E] after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center after:top-[46px]'>
          <Link to="/" className={`font-semibold ${location.pathname === '/' ? 'text-[#6C1E1E]' : 'text-black'}`}>Courses</Link>
          <div className={`absolute bottom-0 left-0 w-full h-[3px] top-[46px] bg-[#6C1E1E] ${location.pathname === '/' ? 'scale-x-100' : 'scale-x-0'}`}></div>
        </li>
        <li className='relative text-lg w-fit block after:block after:content-[""] after:absolute after:h-[3px] after:bg-[#6C1E1E] after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center after:top-[46px]'>
          <Link to="/equipments" className={`font-semibold ${location.pathname === '/equipments' ? 'text-[#6C1E1E]' : 'text-black'}`}>Equipments</Link>
          <div className={`absolute bottom-0 left-0 w-full h-[3px] top-[46px] bg-[#6C1E1E] ${location.pathname === '/equipments' ? 'scale-x-100' : 'scale-x-0'}`}></div>
        </li>
        <li className='relative text-lg w-fit block after:block after:content-[""] after:absolute after:h-[3px] after:bg-[#6C1E1E] after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center after:top-[46px]'>
          <Link to="/about" className={`font-semibold ${location.pathname === '/about' ? 'text-[#6C1E1E]' : 'text-black'}`}>About</Link>
          <div className={`absolute bottom-0 left-0 w-full h-[3px] top-[46px] bg-[#6C1E1E] ${location.pathname === '/about' ? 'scale-x-100' : 'scale-x-0'}`}></div>
        </li>
      </ul>
      <div className='w-full h-0.5 bg-black bg-opacity-20 mt-5'></div>
    </nav>
  );
};

export default Navigation;