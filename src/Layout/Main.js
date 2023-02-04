import React from 'react';
import Dashboard from '../Pages/Dashboard';
import Navbar from '../Pages/Navbar';

const Main = () => {
    return (
        <div className='max-w-[1200px] mx-auto'>
            <Navbar />
            <Dashboard />
        </div>
    );
};

export default Main;