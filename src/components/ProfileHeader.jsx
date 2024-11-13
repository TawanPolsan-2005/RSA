import React from 'react';

const ProfileHeader = () => {
  return (
    <header className='flex flex-col items-center'>
      <img src="src/assets/images/background.png" alt="Header Background" className='w-full h-[400px] object-cover'/>
      <img src="src/assets/images/instructor.png" alt="Instructor Profile" className='mt-[-100px] rounded-3xl w-full max-w-[200px] object-contain'/>
      <h1 className='font-bold text-2xl mt-6 tracking-wide leading-none text-center'>
        Mew Thanyalak
      </h1>
      <p className='mt-3.5 text-sm tracking-wide leading-none text-center text-black'>
        Rifle shooting courses and equipments.
      </p>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d2b979bcea0952fc6a9f55092c8ec6c397457d3e923abf33d5c550bbf84ac4de?placeholderIfAbsent=true&apiKey=c6eac6da410244e78e13f02983c49ac9" alt="Line" className='mt-6 object-contain w-[30px]'/>
    </header>
  );
};

export default ProfileHeader;