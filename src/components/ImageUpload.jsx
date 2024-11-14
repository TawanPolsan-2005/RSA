import React, { useRef, useState } from 'react'

function ImageUpload({ image, setImage }) {
    const inputRef = useRef();

    const handleImageClick = () => {
        inputRef.current.value = "";
        inputRef.current.click();
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setImage(file);
    };

    return (
        <div onClick={handleImageClick} className='text-[#6C1E1E] border-dashed border-2 border-[#6C1E1E] flex flex-col rounded-xl gap-y-2 duration-500 w-96 h-64 ml-[83.5px]'>
            {image ? <img src={URL.createObjectURL(image)}  className='object-cover rounded-xl w-full h-full transition-all duration-500 ease-in-out hover:brightness-75'/> : <img src='src/assets/images/selected-thumbnail.png' className='object-cover rounded-xl w-full h-full transition-all duration-500 ease-in-out hover:brightness-75' />}
            <input type="file" ref={inputRef} onChange={handleImageChange} accept='image/*' className='hidden' />
        </div>
    )
}

export default ImageUpload