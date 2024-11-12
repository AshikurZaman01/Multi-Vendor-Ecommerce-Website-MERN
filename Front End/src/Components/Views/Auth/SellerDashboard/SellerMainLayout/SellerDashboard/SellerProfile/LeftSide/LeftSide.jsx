import { useState } from 'react';
import ProfileImage from './ProfileImage';

const LeftSide = () => {
    const [imagePreview, setImagePreview] = useState(null);
    const [loader, setLoader] = useState(false);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setLoader(true); // Show loader while image is being processed
            const reader = new FileReader();

            reader.onloadend = () => {
                setImagePreview(reader.result); // Set the image preview once it's loaded
                setLoader(false); // Hide loader
            };

            reader.readAsDataURL(file); // Read the selected file as a data URL
        }
    };

    return (
        <div>
            {/* Pass the necessary props to ProfileImage */}
            <ProfileImage 
                imagePreview={imagePreview} 
                loader={loader} 
                handleImageChange={handleImageChange} 
            />
        </div>
    );
};

export default LeftSide;
