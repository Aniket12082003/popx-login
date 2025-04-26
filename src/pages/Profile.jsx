import React, { useEffect, useState } from 'react';

const Profile = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
        setUser(loggedInUser);
    }, []);

    return (
        <div>
            <h1 className='font-bold py-5 px-3 md:px-0 text-xl md:text-center text-gray-600 bg-white'>
                Account Settings
            </h1>

            {user ? (
                <div>
                    <div className='flex mt-5 items-center gap-4 px-4'>
                        <img
                            src="/user.png"
                            alt="Profile"
                            className="w-16 h-16 rounded-full object-cover"
                        />
                        <div>
                            <h1 className="text-lg md:text-xl font-semibold text-gray-600">{user.name}</h1>
                            <p className="text-sm text-gray-600">{user.email}</p>
                        </div>
                    </div>
                    <p className='w-9/10 md:w-full mx-auto text-[17px] text-justify tracking-[-0.09em] md:tracking-normal text-gray-600 font-semibold mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quidem consectetur quis voluptate ducimus, accusantium tenetur autem ex. Odit, totam.</p>
                </div>
            ) : (
                <p className='text-gray-500 text-center mt-4'>Loading user info...</p>
            )}
        </div>
    );
};

export default Profile;
