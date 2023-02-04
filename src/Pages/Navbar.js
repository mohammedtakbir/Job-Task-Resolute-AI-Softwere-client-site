import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';

const Navbar = () => {
    const { user } = useContext(AuthContext);
    return (
        <>
            <div className='flex justify-between my-10'>
                <p className='cursor-pointer'>Logo</p>
                <p>{user?.email}</p>
            </div>
        </>
    );
};

export default Navbar;