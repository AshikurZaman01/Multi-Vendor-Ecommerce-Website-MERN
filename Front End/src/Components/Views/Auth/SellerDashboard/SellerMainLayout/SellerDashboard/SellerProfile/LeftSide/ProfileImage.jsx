import React from 'react';
import { FaRegImages } from 'react-icons/fa';
import { FadeLoader } from 'react-spinners';

const ProfileImage = ({ imagePreview, loader, handleImageChange }) => {
    return (
        <div className="w-full p-4 rounded-md">
            <div className="flex justify-center items-center py-3">
                <label
                    htmlFor="image-upload"
                    className="flex justify-center items-center flex-col h-[150px] w-[150px] rounded-full border border-dashed cursor-pointer hover:border-blue-500 border-gray-400 relative"
                >
                    {/* Display image preview if available, otherwise show the icon */}
                    {imagePreview ? (
                        <img
                            src={imagePreview}
                            alt="Image preview"
                            className="w-full h-full object-cover rounded-full"
                        />
                    ) : (
                        <span>
                            <FaRegImages size={30} className="text-gray-400" />
                        </span>
                    )}
                    <span className="mt-2">Select an image</span>

                    {/* Show loader if image is being processed */}
                    {loader && (
                        <div className="bg-slate-600 absolute left-0 top-0 w-full h-full opacity-70 flex justify-center items-center rounded-full z-20">
                            <FadeLoader color="#36d7b7" />
                        </div>
                    )}

                    {/* Hidden input to allow image selection */}
                    <input
                        type="file"
                        id="image-upload"
                        className="absolute opacity-0 cursor-pointer w-full h-full top-0 left-0"
                        accept="image/*"
                        onChange={handleImageChange} // Handle file selection
                    />
                </label>
            </div>
        </div>
    );
};

export default ProfileImage;
