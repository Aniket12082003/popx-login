import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className='flex flex-col gap-4 md:gap-6 px-5 md:px-0 justify-end h-screen pb-15'>
            <div className='flex flex-col gap-2'>
                <h1 className='text-3xl md:text-4xl font-bold text-gray-800'>Welcome to PopX</h1>
                <p className='w-9/10 md:w-full text-[17px] text-gray-600 font-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <button className='bg-purple-600 hover:bg-purple-800 hover:cursor-pointer duration-300 ease-in-out font-bold text-white p-2 rounded-lg -mb-2' onClick={() => navigate('/register')}>Create Account</button>
            <button className='bg-gray-400 hover:bg-gray-500 hover:cursor-pointer duration-300 ease-in-out hover:text-white text-gray-700 font-bold p-2 rounded-lg' onClick={() => navigate('/login')}>Already Registered? Login</button>

        </div>
    )
}

export default Home