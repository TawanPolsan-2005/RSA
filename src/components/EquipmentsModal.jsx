import { faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function CoursesModal({ open, onClose }) {
    return (
        <div onClick={onClose} className={`fixed inset-0 flex justify-center items-center transition-colors ${open ? 'visible bg-black/20' : 'invisible'}`}>
            <div onClick={(e) => e.stopPropagation()} className={`w-[500px] h-[400px] bg-[#F4F0EF] rounded-xl shadow p-6 transition-all ${open ? 'scale-100 opacity-100' : 'scale-125 opacity-0'}`}>
                <button onClick={onClose} className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-[#F4F0EF] hover:text-black duration-500">
                    <FontAwesomeIcon icon={faX} />
                </button>   
                <h1>Equipments Modal</h1>
            </div>
        </div>
    )
}