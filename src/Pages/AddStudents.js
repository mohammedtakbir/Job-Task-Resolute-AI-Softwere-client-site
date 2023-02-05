import React from 'react';
import { useForm } from 'react-hook-form';

const AddStudents = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleAddStudent = (data) => {
        console.log(data)
    }

    return (
        <>
            <form onSubmit={handleSubmit(handleAddStudent)}>
                <div className='grid grid-cols-3 gap-4 mb-4'>
                    <div>
                        <input {...register('firstName', { required: 'First Name is Required' })} type="text" placeholder="First Name" className="input input-bordered w-full" />
                        {errors.firstName && <p role='alert' className='text-red-500 text-xs mt-1 ml-1'>{errors.firstName?.message}</p>}
                    </div>
                    <div>
                        <input {...register('middleName', { required: 'Middle Name is Required' })} type="text" placeholder="Middle Name" className="input input-bordered w-full" />
                        {errors.middleName && <p role='alert' className='text-red-500 text-xs mt-1 ml-1'>{errors.middleName?.message}</p>}
                    </div>
                    <div>
                        <input {...register('lastName', { required: 'Last Name is Required' })} type="text" placeholder="Last Name" className="input input-bordered w-full" />
                        {errors.lastName && <p role='alert' className='text-red-500 text-xs mt-1 ml-1'>{errors.lastName?.message}</p>}
                    </div>
                </div>
                <div className='grid grid-cols-3 gap-4 mb-4 w-full'>
                    <div>
                        <select {...register('selectClass', { required: 'Class is Required' })} className="select select-bordered w-full max-w-xs">
                            <option disabled selected>Select Class</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                            <option value='6'>6</option>
                            <option value='6'>7</option>
                            <option value='7'>8</option>
                            <option value='8'>9</option>
                            <option value='9'>10</option>
                            <option value='11'>11</option>
                            <option value='12'>12</option>
                        </select>
                        {errors.selectClass && <p role='alert' className='text-red-500 text-xs mt-1 ml-1'>{errors.selectClass?.message}</p>}
                    </div>
                    <div>
                        <select {...register('selectDivision', { required: 'Division is Required' })} className="select select-bordered w-full max-w-xs">
                            <option selected>Select Division</option>
                            <option value='A'>A</option>
                            <option value='E'>B</option>
                            <option value='C'>C</option>
                            <option value='D'>D</option>
                        </select>
                        {errors.selectDivision && <p role='alert' className='text-red-500 text-xs mt-1 ml-1'>{errors.selectDivision?.message}</p>}
                    </div>
                    <div>
                        <input
                            {...register('roll', { required: 'Roll is Required' })}
                            type="text"
                            placeholder="Enter Roll Number in Digits"
                            className="input input-bordered w-full"
                        />
                        {errors.roll && <p role='alert' className='text-red-500 text-xs mt-1 ml-1'>{errors.roll?.message}</p>}
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-4 mb-4'>
                    <div>
                        <input {...register('addressLine1', { required: 'Address Line is Required' })} type="text" placeholder="Address Line 1" className="input input-bordered w-full" />
                        {errors.addressLine1 && <p role='alert' className='text-red-500 text-xs mt-1 ml-1'>{errors.addressLine1?.message}</p>}
                    </div>
                    <div>
                        <input {...register('addressLine2', { required: 'Address Line is Required' })} type="text" placeholder="Address Line 2" className="input input-bordered w-full" />
                        {errors.addressLine2 && <p role='alert' className='text-red-500 text-xs mt-1 ml-1'>{errors.addressLine2?.message}</p>}
                    </div>
                </div>
                <div className='grid grid-cols-3 gap-4 mb-4'>
                    <div>
                        <input {...register('landmark', { required: 'Landmark is Required' })} type="text" placeholder="Landmark" className="input input-bordered w-full" />
                        {errors.landmark && <p role='alert' className='text-red-500 text-xs mt-1 ml-1'>{errors.landmark?.message}</p>}
                    </div>
                    <div>
                        <input {...register('city', { required: 'City is Required' })} type="text" placeholder="City" className="input input-bordered w-full" />
                        {errors.city && <p role='alert' className='text-red-500 text-xs mt-1 ml-1'>{errors.city?.message}</p>}
                    </div>
                    <div>
                        <input {...register('picCode', { required: 'Pin Code is Required' })} type="text" placeholder="Pin Code" className="input input-bordered w-full" />
                        {errors.picCode && <p role='alert' className='text-red-500 text-xs mt-1 ml-1'>{errors.picCode?.message}</p>}
                    </div>
                </div>
                <div>
                    <button
                        className='class="focus:outline-none text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-xs mt-1 ml-1 px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Red</button>'
                    >
                        Add Student
                    </button>
                </div>
            </form>
        </>
    );
};

export default AddStudents;