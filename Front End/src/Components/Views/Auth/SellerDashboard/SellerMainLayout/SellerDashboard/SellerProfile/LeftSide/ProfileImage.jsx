import { useState } from "react";
import { FadeLoader } from "react-spinners";

const ProfileImage = ({ loader }) => {
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="w-full p-4 bg-red-100 rounded-md">
            <div className="flex justify-center items-center py-3">
                {
                    image ? (
                        <label htmlFor="" className="h-[130px] w-[130px] rounded-full overflow-hidden relative cursor-pointer border-2 border-blue-500">
                            <img
                                src={image}
                                alt="Profile Preview"
                                className="w-full h-full object-cover rounded-full shadow-md"
                            />
                            {loader &&
                                <div className="absolute left-0 top-0 w-full h-full bg-blue-500 opacity-70 flex justify-center items-center z-20 rounded-full">
                                    <FadeLoader color="white" />
                                </div>
                            }
                        </label>
                    ) : (
                        <label className="flex justify-center items-center flex-col h-[130px] w-[130px] border-blue-400 rounded-full cursor-pointer border-dashed hover:border-2 hover:border-blue-600">
                            <span>Select an image</span>
                            <input
                                type="file"
                                id="img"
                                className="hidden"
                                onChange={handleImageChange}
                            />
                            {loader &&
                                <div className="absolute left-0 top-0 w-full h-full bg-blue-500 opacity-70 flex justify-center items-center z-20 rounded-full">
                                    <FadeLoader color="white" />
                                </div>
                            }
                        </label>
                    )
                }
            </div>
        </div>
    );
};

export default ProfileImage;
