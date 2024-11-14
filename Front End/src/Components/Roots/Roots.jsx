import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { getUserInfo } from '../../Redux/features/authSlice';

const Roots = () => {

    const dispatch = useDispatch();
    const { token } = useSelector((state) => state.auth);


    useEffect(() => {
        if (token) {
            dispatch(getUserInfo(token))
        }
    }, [dispatch, token])

    return (
        <div className='min-h-screen  '>
            <Outlet></Outlet>
        </div>
    );
};

export default Roots;