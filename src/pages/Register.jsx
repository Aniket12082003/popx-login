import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [agency, setAgency] = useState('');

    const [isNameFocused, setIsNameFocused] = useState(false);
    const [isPhoneFocused, setIsPhoneFocused] = useState(false);
    const [isEmailFocused, setIsEmailFocused] = useState(false);
    const [isCompanyFocused, setIsCompanyFocused] = useState(false);
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);

    const navigate = useNavigate();

    const isFormValid = name && phoneNumber && email && password && companyName && agency;

    const floatLabel = (focused, value) =>
        focused || value.length > 0
            ? 'scale-85 -translate-y-5 -translate-x-1 text-purple-600 px-1'
            : 'scale-100 -translate-y-5 -translate-x-1 text-purple-400 px-1';

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (!isFormValid || !agency) {
            alert('Please fill in all fields before submitting');
            return;
        }
    
        const newUser = {
            name,
            phoneNumber,
            email,
            password,
            companyName,
            agency,
        };
    
        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
        existingUsers.push(newUser);
        localStorage.setItem('users', JSON.stringify(existingUsers));
        
        // Clear form
        setName('');
        setPhoneNumber('');
        setEmail('');
        setPassword('');
        setCompanyName('');
        setAgency('');

        navigate('/login');
    };

    return (
        <div className="p-6">
            <h1 className="w-2/3 md:w-full text-2xl text-gray-800 font-bold mb-2">
                Sign in to your PopX account
            </h1>
            <p className="mb-6 font-semibold w-2/3 md:w-full text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>

            <form onSubmit={handleSubmit}>
                {/* Name Field */}
                <div className="relative mb-6">
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onFocus={() => setIsNameFocused(true)}
                        onBlur={() => setIsNameFocused(false)}
                        className="w-9/10 border-gray-300 bg-transparent rounded-lg border-2 px-3 pt-2 pb-1 text-base text-gray-900 placeholder-transparent focus:border-gray-500 focus:outline-none focus:pt-4 focus:pb-2 focus:px-3 duration-200 ease-in-out"
                        placeholder=" "
                        id="nameInput"
                        required
                    />
                    <label
                        htmlFor="nameInput"
                        className={`absolute left-3 top-2 font-semibold bg-[#f5f5f5] transition-transform duration-200 ease-in-out pointer-events-none ${floatLabel(isNameFocused, name)}`}
                    >
                        Name <span className="text-red-600">*</span>
                    </label>
                </div>

                {/* Phone Number Field */}
                <div className="relative mb-6">
                    <input
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        onFocus={() => setIsPhoneFocused(true)}
                        onBlur={() => setIsPhoneFocused(false)}
                        className="w-9/10 border-gray-300 bg-transparent rounded-lg border-2 px-3 pt-2 pb-1 text-base text-gray-900 placeholder-transparent focus:border-gray-500 focus:outline-none focus:pt-4 focus:pb-2 focus:px-3 duration-200 ease-in-out"
                        placeholder=" "
                        id="phoneNumberInput"
                        required
                    />
                    <label
                        htmlFor="phoneNumberInput"
                        className={`absolute left-3 top-2 font-semibold bg-[#f5f5f5] transition-transform duration-200 ease-in-out pointer-events-none ${floatLabel(isPhoneFocused, phoneNumber)}`}
                    >
                        Phone Number <span className="text-red-600">*</span>
                    </label>
                </div>

                {/* Email Field */}
                <div className="relative mb-6">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onFocus={() => setIsEmailFocused(true)}
                        onBlur={() => setIsEmailFocused(false)}
                        className="w-9/10 border-gray-300 bg-transparent rounded-lg border-2 px-3 pt-2 pb-1 text-base text-gray-900 placeholder-transparent focus:border-gray-500 focus:outline-none focus:pt-4 focus:pb-2 focus:px-3 duration-200 ease-in-out"
                        placeholder=" "
                        id="emailInput"
                        required
                    />
                    <label
                        htmlFor="emailInput"
                        className={`absolute left-3 top-2 font-semibold bg-[#f5f5f5] transition-transform duration-200 ease-in-out pointer-events-none ${floatLabel(isEmailFocused, email)}`}
                    >
                        Email <span className="text-red-600">*</span>
                    </label>
                </div>

                {/* Password Field */}
                <div className="relative mb-6">
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onFocus={() => setIsPasswordFocused(true)}
                        onBlur={() => setIsPasswordFocused(false)}
                        className="w-9/10 border-gray-300 bg-transparent rounded-lg border-2 px-3 pt-2 pb-1 text-base text-gray-900 placeholder-transparent focus:border-gray-500 focus:outline-none focus:pt-4 focus:pb-2 focus:px-3 duration-200 ease-in-out"
                        placeholder=" "
                        id="passwordInput"
                        required
                    />
                    <label
                        htmlFor="passwordInput"
                        className={`absolute left-3 top-2 font-semibold bg-[#f5f5f5] transition-transform duration-200 ease-in-out pointer-events-none ${floatLabel(isPasswordFocused, password)}`}
                    >
                        Password
                    </label>
                </div>

                {/* Company Name Field */}
                <div className="relative mb-6">
                    <input
                        type="text"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        onFocus={() => setIsCompanyFocused(true)}
                        onBlur={() => setIsCompanyFocused(false)}
                        className="w-9/10 border-gray-300 bg-transparent rounded-lg border-2 px-3 pt-2 pb-1 text-base text-gray-900 placeholder-transparent focus:border-gray-500 focus:outline-none focus:pt-4 focus:pb-2 focus:px-3 duration-200 ease-in-out"
                        placeholder=" "
                        id="companyNameInput"
                        required
                    />
                    <label
                        htmlFor="companyNameInput"
                        className={`absolute left-3 top-2 font-semibold bg-[#f5f5f5] transition-transform duration-200 ease-in-out pointer-events-none ${floatLabel(isCompanyFocused, companyName)}`}
                    >
                        Company Name <span className="text-red-600">*</span>
                    </label>
                </div>

                {/* Agency Radio Group */}
                <div className="relative mb-6">
                    <p className='font-semibold text-gray-600'>Are you an agency? <span className='text-red-600'>*</span></p>
                    <div className='flex align-center gap-10 mt-2'>
                        <div>
                            <input
                                type="radio"
                                name="agency"
                                id="agencyYes"
                                value="yes"
                                onChange={(e) => setAgency(e.target.value)}
                                required
                                className='mr-2 scale-125'
                            />
                            <label htmlFor="agencyYes" className='text-gray-600 text-md font-semibold'>Yes</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                name="agency"
                                id="agencyNo"
                                value="no"
                                onChange={(e) => setAgency(e.target.value)}
                                className='mr-2 scale-125'
                            />
                            <label htmlFor="agencyNo" className='text-gray-600 text-md font-semibold'>No</label>
                        </div>
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={!isFormValid}
                    className={`w-9/10 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-colors ${
                        isFormValid
                            ? 'bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300'
                            : 'bg-purple-300 cursor-not-allowed'
                    }`}
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default Register;
