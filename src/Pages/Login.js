import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';

const Login = () => {

    const { userLogin } = useContext(AuthContext)

    const handleLogIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        userLogin(email, password)
            .then(res => console.log(res.user))
            .catch(err => console.error(err.message))
    };

    return (
        <div>
            <form onSubmit={handleLogIn} className='max-w-[400px] mx-auto shadow-lg p-4 border rounded-md'>
                <div className='mb-4 mt-3'>
                    <label
                        htmlFor=""
                        className='block text-sm font-medium mb-1'>Email</label>
                    <input
                        className='border w-full border-[#8c99ab] py-2 px-3 rounded-md text-sm'
                        type="email"
                        name="email"
                        id=""
                        placeholder='Email Address'
                        required
                    />
                </div>
                <div className='mb-2'>
                    <label
                        htmlFor=""
                        className='block text-sm font-medium mb-1'>Password</label>
                    <input
                        className='border w-full border-[#8c99ab] py-2 px-3 rounded-md text-sm'
                        type="password"
                        name="password"
                        id=""
                        placeholder='Password'
                        required
                    />
                </div>
                {/* <p className='text-red-500 text-sm'>{error}</p> */}
                <div className='mt-5'>
                    <button type='submit' className='bg-slate-200 hover:bg-slate-300 py-3 px-4 rounded-md w-full text-sm font-medium'>
                        {'Log In'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;