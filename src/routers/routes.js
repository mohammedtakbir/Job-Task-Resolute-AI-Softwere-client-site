import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddStudents from "../Pages/AddStudents";
import Login from "../Pages/Login";
import ManageStudents from "../Pages/ManageStudents";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                index: true,
                element: <Login />
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