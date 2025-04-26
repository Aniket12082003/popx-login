import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [isEmailFocused, setIsEmailFocused] = useState(false);
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const emailInput = emailRef.current;
        const passwordInput = passwordRef.current;

        const handleFocus = (setFocus) => () => setFocus(true);
        const handleBlur = (setFocus) => () => setFocus(false);

        emailInput.addEventListener('focus', handleFocus(setIsEmailFocused));
        emailInput.addEventListener('blur', handleBlur(setIsEmailFocused));

        passwordInput.addEventListener('focus', handleFocus(setIsPasswordFocused));
        passwordInput.addEventListener('blur', handleBlur(setIsPasswordFocused));

        return () => {
        emailInput.removeEventListener('focus', handleFocus(setIsEmailFocused));
        emailInput.removeEventListener('blur', handleBlur(setIsEmailFocused));
        passwordInput.removeEventListener('focus', handleFocus(setIsPasswordFocused));
        passwordInput.removeEventListener('blur', handleBlur(setIsPasswordFocused));
        };
    }, []);

    const isFormValid = email.trim() !== '' && password.trim() !== '';
    const emailShouldFloat = isEmailFocused || email.length > 0;
    const passwordShouldFloat = isPasswordFocused || password.length > 0;

    const handleLogin = (e) => {
        e.preventDefault();

        const users = JSON.parse(localStorage.getItem('users')) || [];

        const matchedUser = users.find(
            (user) => user.email === email && user.password === password
        );

    
        if (matchedUser) {
            localStorage.setItem('loggedInUser', JSON.stringify(matchedUser));
            navigate('/profile');
        } else {
            alert('Invalid email or password. Please try again.');
        }
    };

    return (
        <div className="p-6">
            <h1 className="w-2/3 md:w-full text-2xl text-gray-800 font-bold mb-2">Sign in to your PopX account</h1>
            <p className="mb-6 font-semibold w-2/3 md:w-full text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

            <form onSubmit={handleLogin}>
                {/* Email Field */}
                <div className="relative mb-6">
                    <input
                    ref={emailRef}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-9/10 border-gray-300 bg-transparent rounded-lg border-2 px-3 pt-2 pb-1 text-base text-gray-900 placeholder-transparent focus:border-gray-500 focus:outline-none focus:pt-4 focus:pb-2 focus:px-3 duration-200 ease-in-out"
                    placeholder=" "
                    id="emailInput"
                    />
                    <label
                    htmlFor="emailInput"
                    className={`absolute left-3 top-2 font-semibold bg-[#f5f5f5] transition-transform duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)] pointer-events-none ${
                        emailShouldFloat
                        ? 'scale-85 -translate-y-5 -translate-x-1 text-purple-600 px-1'
                        : 'scale-100 -translate-y-5 -translate-x-1 text-purple-400 px-1'
                    }`}
                    >
                    Your email
                    </label>
                </div>
                {/* Password Field */}
                <div className="relative mb-6">
                    <input
                    ref={passwordRef}
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-9/10 border-gray-300 bg-transparent rounded-lg border-2 px-3 pt-2 pb-1 text-base text-gray-900 placeholder-transparent focus:border-gray-500 focus:outline-none focus:pt-4 focus:pb-2 focus:px-3 duration-200 ease-in-out"
                    placeholder=" "
                    id="passwordInput"
                    />
                    <label
                    htmlFor="passwordInput"
                    className={`absolute left-3 font-semibold top-2 bg-[#f5f5f5] transition-transform duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)] pointer-events-none ${
                        passwordShouldFloat
                        ? 'scale-85 -translate-y-5 -translate-x-1 text-purple-600 px-1'
                        : 'scale-100 -translate-y-5 -translate-x-1 text-purple-400 px-1'
                    }`}
                    >
                    Password
                    </label>
                </div>
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

export default Login;
