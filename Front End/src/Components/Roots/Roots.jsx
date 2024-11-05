import { Outlet } from 'react-router-dom';

const Roots = () => {
    return (
        <div className='max-w-screen-xl min-h-screen  mx-auto px-4 py-2'>
            <Outlet></Outlet>
        </div>
    );
};

export default Roots;