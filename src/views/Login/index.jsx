import React, { useState } from 'react'
import SignUpSplashImg from '../../assets/images/sign-up.webp'
import Logo from '../../assets/icons/logo'
import LogoFull from '../../assets/icons/logoFull'
import PenHighlight from '../../assets/icons/highlight'
import EyeDuotone from '../../assets/icons/eye'
import EyeOpenOutline from '../../assets/icons/eyeOpenOutline'
import EyeClosedOutline from '../../assets/icons/eyeClosedOutline'
import RightArrow from '../../assets/icons/rightArrow'
import { Link } from 'react-router-dom'

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className='w-5/12 flex justify-center items-center'>

            <div className='w-[80%]'>
                <div className=''>
                    <span className='text-blue-500'><LogoFull width={'250px'} /></span>
                </div>

                <h1 className='text-4xl font-bold my-8'>
                    Welcome back! Please
                    <span className='relative mx-3'>
                        Sign in
                        <span className='text-blue-500'><PenHighlight /></span>
                    </span>
                    to continue.
                </h1>

                <div className=''>
                    <form>
                        <div className="mb-6">
                            <label for="email" className="block mb-2 text-[15px] font-light text-gray-900 dark:text-white">Email address</label>
                            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-[15px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
                        </div>
                        <div className="grid gap-6 mb-6">
                            <div className='relative'>
                                <label for="password" className="block mb-2 text-[15px] font-light text-gray-900 dark:text-white">Password</label>
                                <input type={`${showPassword ? 'text' : 'password'}`} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-[15px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />

                                <span class="absolute right-0 bottom-0 h-[44px] inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-e-lg dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600" onClick={e => setShowPassword(!showPassword)}>
                                    {showPassword ? <EyeClosedOutline /> : <EyeOpenOutline />}
                                </span>

                            </div>
                        </div>
                        <div className="flex justify-between mb-6">
                            <div className='flex'>
                                <div className="flex items-center h-5">
                                    <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                                </div>
                                <label for="remember" className="ms-2 text-[15px] font-light text-gray-900 dark:text-gray-300">
                                    Remember Me
                                </label>
                            </div>
                            <a href="#" className="font-light text-blue-600 hover:underline dark:text-blue-500">Forgot Password</a>
                        </div>

                        <div className='flex mb-6 justify-center'>
                            <button type="submit" className="flex items-center justify-center gap-3 text-[15px] w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-light rounded-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <span>Sign In</span>
                                <RightArrow />
                            </button>
                        </div>

                        <span className='font-light'>Don’t have an account?</span> <Link to="/register" className="text-blue-600 hover:underline dark:text-blue-500">Sign Up</Link>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Login