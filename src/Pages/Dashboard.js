import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <section className='flex gap-[5%]'>
            <div className='w-[15%] flex flex-col'>
                <NavLink
                    style={({ isActive }) => {
                        return isActive ? { backgroundColor: 'red', color: 'white' } : undefined
                    }}
                    to='/add-students'
                    className='font-semibold mb-3 p-2 rounded-md'
                >
                    Add Students
                </NavLink>
                <NavLink
                    style={({ isActive }) => {
                        return isActive ? { backgroundColor: 'red', color: 'white' } : undefined
                    }}
                    to='/manage-students'
                    className='font-semibold p-2 rounded-md'
                >
                    Manage Students
                </NavLink>
                <button className='mt-5 flex justify-start pl-2'>Log Out</button>
            </div>
            <div className='w-[80%]'>
                <Outlet />
            </div>
        </section>
    );
};

export default Dashboard;