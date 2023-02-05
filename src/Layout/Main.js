import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import Dashboard from '../Pages/Dashboard';
import Login from '../Pages/Login';
import Navbar from '../Pages/Navbar';

const Main = () => {
    const { user, loading } = useContext(AuthContext);

    if(loading){
        return <p className='min-h-screen flex items-center justify-center text-2xl font-semibold'>Loading...</p>
    }

    console.log(loading)

    return (
        <div className='max-w-[1200px] mx-auto'>
            <Navbar />
            {user ? <Dashboard /> : <Login />}
        </div>
    );
};

export default Main;