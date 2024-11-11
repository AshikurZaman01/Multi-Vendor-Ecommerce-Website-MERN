import { useState } from "react";
import { IoIosImages, IoMdCloseCircle } from "react-icons/io";

const ImageUploader = ({ images, setImages, imageShow, setImageShow }) => {
    const imageHandler = (e) => {
        const files = e.target.files;
        const length = files.length;

        if (length > 0) {
            setImages([...images, ...files]);

            let imageURL = [];
            for (let index = 0; index < length; index++) {
                imageURL.push(URL.createObjectURL(files[index]));
            }
            setImageShow([...imageShow, ...imageURL]);
        }
    };

    return (
        <div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sm:gap-4 md:gap-4 gap-3 w-full mb-4">
                <label htmlFor="image" className="flex justify-center items-center flex-col h-[180px] cursor-pointer border border-dashed hover:border-blue-400 transition-all duration-300 w-full">
                    <span><IoIosImages className="text-4xl text-gray-400" /></span>
                    <span>Select Image</span>
                </label>
                <input className="hidden" onChange={imageHandler} multiple type="file" id="image" />
            </div>

            {/* Image Previews */}
            {imageShow.length > 0 && (
                <div className="flex flex-wrap gap-4 mb-6">
                    {imageShow.map((imageUrl, index) => (
                        <div key={index} className="relative w-32 h-32">
                            <img src={imageUrl} alt={`Preview ${index}`} className="w-full h-full object-cover rounded-lg" />
                            <button
                                type="button"
                                onClick={() => {
                                    const updatedImages = images.filter((_, i) => i !== index);
                                    const updatedImageShow = imageShow.filter((_, i) => i !== index);
                                    setImages(updatedImages);
                                    setImageShow(updatedImageShow);
                                }}
                                className="absolute top-0 right-0 bg-gray-800 text-white rounded-full p-1"
                            >
                                <IoMdCloseCircle size={16} />
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ImageUploader;
