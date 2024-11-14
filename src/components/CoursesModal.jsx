import { faVideo, faX, faFile, faUpload } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ImageUpload from "./ImageUpload"
import { useState, useRef } from "react"
import axios from "axios"

export default function CoursesModal({ open, onClose }) {
    const inputRef = useRef();

    //State variables for tracking file-related information
    const [selectedFile, setSelectedFile] = useState(null);
    const [progress, setProgress] = useState(0);
    const [uploadStatus, setUploadStatus] = useState("select"); // select | uploading | done

    const [image, setImage] = useState(null);

    const resetImage = () => {
        setImage(null);
    };

    const handleClose = () => {
        resetImage();
        onClose();
    };

    //Handle file change event
    const handleFileChange = (event) => {
        if (event.target.files && event.target.files.length > 0) {
            setSelectedFile(event.target.files[0]);
            //Call 'handleUpload' after selected file
            handleUpload();
        }
    };

    //Function to trigger file input dialog
    const onChooseFile = () => {
        inputRef.current.click();
    };

    //Fuction to clear selected file and reset state
    const clearFileInput = () => {
        inputRef.current.value = "";
        setSelectedFile(null);
        setProgress(0);
        setUploadStatus("select");
    };

    //Function to handle file upload
    const handleUpload = async () => {
        //If upload is already donr, clear and return
        if (uploadStatus === 'done') {
            clearFileInput();
            return;
        }
        try {
            //Set upload status to 'uploading'
            setUploadStatus("uploading");

            //Creat FormData and append selected file
            const formData = new FormData();
            formData.append("file", selectedFile);

            //Make an asynchronous POST request to the server for file upload
            const response = await axios.post(
                "http://localhost:5173/api/upload",
                formData,
                {
                    onUploadProgress: (ProgressEvent) => {
                        //Update progress based on upload progress
                        const percentCompleted = Math.round(
                            (ProgressEvent.loaded * 100) / ProgressEvent.total
                        );
                        setProgress(percentCompleted);
                    },
                }
            );
            setUploadStatus("done");
        } catch (error) {
            setUploadStatus("selected");
        }
    }

    return (
        <div onClick={handleClose} className={`text-[#6C1E1E] fixed inset-0 flex justify-center items-center transition-colors ${open ? 'visible bg-black/20' : 'invisible'}`}>
            <div onClick={(e) => e.stopPropagation()} className={`text-center w-[600px] h-[550px] bg-[#F4F0EF] rounded-xl shadow p-6 transition-all ${open ? 'scale-100 opacity-100' : 'scale-125 opacity-0'}`}>
                <button onClick={handleClose} className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-[#F4F0EF] hover:text-black duration-500">
                    <FontAwesomeIcon icon={faX} />
                </button>
                <h1 className="pb-5 pt-3 font-bold">Upload your courses here</h1>
                <ImageUpload image={image} setImage={setImage} />
                {/* File input element with a reference */}
                <input ref={inputRef} type="file" accept="video/*, .mkv" onChange={handleFileChange} className="hidden"></input>
                {/* Button to trigger the file input dialog */}
                {!selectedFile && (
                    <button onClick={onChooseFile} className="flex flex-row gap-x-2 items-center justify-center bg-[#6C1E1E] text-white mx-[80px] my-5 py-2 px-[137px] rounded-lg hover:bg-black ease-in-out duration-500">
                        <FontAwesomeIcon icon={faVideo} />
                        <p>Select Video</p>
                    </button>
                )}
                {/* Display file information and progress when a file is selected */}
                {selectedFile && (
                    <>
                        <div className="w-[390px] h-[50px] flex items-center justify-center border-2 border-[#6C1E1E] bg-[#F4F0EF] text-[#6C1E1E] mx-[80px] my-5 rounded-lg ">
                            <div className="flex flex-row items-center gap-x-5">
                                <FontAwesomeIcon icon={faFile} className="text-[25px]"/>
                                <div className="flex flex-col gap-y-1 items-start">
                                    {/* Display file name and progress bar */}
                                    <h6 className="font-normal text-[13px]">{selectedFile.name}</h6>
                                    <div className="w-[250px] h-1 rounded-[8px] bg-gray-300">
                                            <div className="bg-[#6C1E1E] h-1 rounded-[8px] trainsition-width duration-500 ease-in-out " style={{width: `${progress}%` }}/>
                                    </div>
                                </div>
                                {/* Display clear button*/}
                                <button onClick={clearFileInput} className="hover:text-white hover:bg-[#6C1E1E] duration-500 mt-1 bg-[#D9A6A6] bg-opacity-30 rounded-full p-1 w-5 h-5 flex items-center justify-center text-[10px]">
                                    <FontAwesomeIcon icon={faX} />
                                </button>
                            </div>
                        </div>
                    </>
                )}
                <div className="flex flex-col bg-[#F4F0EF] border-2 border-[#6C1E1E] w-[390px] h-[40px] rounded-lg mx-[80px] mt-5 items-start">
                        <p className="text-[12px] bg-[#F4F0EF] ml-3 -mt-2 px-1">TITLE</p>
                        <input type="text" className="px-4 py-2 text-[12px] -mt-1 text-black outline-none w-[390px] h-[30px] bg-transparent" />
                </div>
                <button onClick={handleClose} className="mt-5 bg-[#6C1E1E] text-white px-3 py-2 rounded-lg hover:bg-black duration-500 ease-in-out"><FontAwesomeIcon icon={faUpload} className="mr-2"/>Upload</button>
            </div>
        </div>
    )
}