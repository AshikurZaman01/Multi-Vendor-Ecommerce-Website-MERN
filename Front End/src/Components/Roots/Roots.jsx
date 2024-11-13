import { Outlet } from 'react-router-dom';

const Roots = () => {
    return (
        <div className=' min-h-screen  '>
            <Outlet></Outlet>
        </div>
    );
};

export default Roots;