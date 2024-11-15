import { faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ImageUpload from "./ImageUpload"
import { useState } from "react"

export default function EquipmentsModal({ open, onClose }) {
    const [image, setImage] = useState(null);

    const resetImage = () => {
        setImage(null);
    };

    const handleClose = () => {
        resetImage();
        onClose();
    };

    return (
        <div onClick={handleClose} className={`text-[#6C1E1E] fixed inset-0 flex justify-center items-center transition-colors ${open ? 'visible bg-black/20' : 'invisible'}`}>
            <div onClick={(e) => e.stopPropagation()} className={`text-center w-[600px] h-[550px] bg-[#F4F0EF] rounded-xl shadow p-6 transition-all ${open ? 'scale-100 opacity-100' : 'scale-125 opacity-0'}`}>
                <button onClick={handleClose} className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-[#F4F0EF] hover:text-black duration-500">
                    <FontAwesomeIcon icon={faX} />
                </button>
                <h1 className="pb-5 pt-3 font-bold">Add your equipments here</h1>
                <ImageUpload image={image} setImage={setImage} />
                <div className="flex flex-col bg-[#F4F0EF] border-2 border-[#6C1E1E] w-[390px] h-[40px] rounded-lg mx-[80px] mt-5 items-start">
                    <p className="text-[12px] bg-[#F4F0EF] ml-3 -mt-2 px-1">PRODUCT NAME</p>
                    <input type="text" className="px-4 py-2 text-[12px] -mt-1 text-black outline-none w-[390px] h-[30px] bg-transparent" />
                </div>
                <div className="flex flex-row gap-x-2.5">
                    <div className="flex flex-col bg-[#F4F0EF] border-2 border-[#6C1E1E] w-[190px] h-[40px] rounded-lg ml-[80px] mt-5 items-start">
                        <p className="text-[12px] bg-[#F4F0EF] ml-3 -mt-2 px-1">PRODUCT PRICE</p>
                        <input type="text" className="px-4 py-2 text-[12px] -mt-1 text-black outline-none w-[175px] h-[30px] bg-transparent" />
                        <p className="absolute right-[320px] top-[425px] text-lg">฿</p>
                    </div>
                    <div className="flex flex-col bg-[#F4F0EF] border-2 border-[#6C1E1E] w-[190px] h-[40px] rounded-lg mr-[80px] mt-5 items-start">
                        <p className="text-[12px] bg-[#F4F0EF] ml-3 -mt-2 px-1">QUANTITY</p>
                        <input type="text" className="px-4 py-2 text-[12px] -mt-1 text-black outline-none w-[190px] h-[30px] bg-transparent" />
                    </div>
                </div>
                <button onClick={handleClose} className="text-white bg-[#6C1E1E] mt-7 px-4 py-2 rounded-lg hover:bg-black ease-in-out duration-500">Confirm</button>
            </div>
        </div>
    )
}