import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddStudents from "../Pages/AddStudents";
import Dashboard from "../Pages/Dashboard";
import ManageStudents from "../Pages/ManageStudents";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/add-students',
                element: <AddStudents />
            },
            {
                path: '/manage-students',
                element: <ManageStudents />
            },
        ]
    }
])