import React from 'react';
import Lottie from 'lottie-react';

const Animation = ({ animationData }) => {
    return <div className='flex justify-center items-center h-full'>
        <Lottie animationData={animationData} loop={true} />;
    </div>
};

export default Animation;
