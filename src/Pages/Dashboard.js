import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div>
                <Link to='/add-students'>Add Students</Link>
                <Link to='/manage-students'>Manage Students</Link>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;