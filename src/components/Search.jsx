import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
import CoursesModal from './CoursesModal';
import EquipmentsModal from './EquipmentsModal';

function Search() {
    const [open, setOpen] = useState(false)
    const location = useLocation();

    const handleModalOpen = () => {
        setOpen(true);
    };

    const handleModalClose = () => {
        setOpen(false);
    };

    return (
    <div className='flex items-center mb-5 mt-10'>
        <div className='ml-40 w-96 bg-white rounded-xl shadow-xl'>
            <form className='flex items-center justify-center p-2'>
                <FontAwesomeIcon icon={faMagnifyingGlass} className="mr-2 text-gray-600 ml-2" />
                <input type='text' placeholder={location.pathname === '/' ? 'Search courses' : 'Search products'} className='w-full rounded-xl px-2 py-1 focus:outline-none'/>
                <button className='bg-[#6C1E1E] text-white rounded-xl px-3 py-1 hover:bg-black transition-colors duration-500'>Search</button>
            </form>
        </div>
        <p className='ml-10 pr-10'>{location.pathname === '/' ? '0 Courses' : '0 Products'}</p>
        <button className='ml-96 text-[#6C1E1E] border-2 rounded-xl px-3 py-1 border-[#6C1E1E] hover:bg-[#6C1E1E] hover:text-white transition-colors duration-500' onClick={handleModalOpen}>
            {location.pathname === '/' ? 'Add Courses +' : 'Add Equipments +'}
        </button>
        {location.pathname === '/' ? (
            <CoursesModal open={open} onClose={handleModalClose} />
        ) : (
            <EquipmentsModal open={open} onClose={handleModalClose} />
        )}
    </div>
    )
}

export default Search