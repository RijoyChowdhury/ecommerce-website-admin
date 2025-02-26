import React from 'react'
import SignUpSplashImg from '../../assets/images/sign-up.webp'
import Logo from '../../assets/icons/logo'
import LogoFull from '../../assets/icons/logoFull'
import PenHighlight from '../../assets/icons/highlight'
import EyeDuotone from '../../assets/icons/eye'
import { Outlet } from 'react-router-dom'

const ComponentDecorator = () => {
    return (
        <div className='flex m-6'>
            {/* Outlet */}
            <Outlet />

            {/* Splash Cover */}
            <div className='w-7/12 flex justify-center bg-gray-50 rounded-3xl'>
                <div className='flex flex-col gap-10 py-10'>
                    <span className='text-3xl font-semibold text-center'>The simplest way to <br /> manage your workspace.</span>
                    <span className='font-[300] text-center'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet <br /> sint velit officia consequat duis.</span>
                    <img src={SignUpSplashImg} />
                </div>
            </div>
        </div>
    )
}

export default ComponentDecorator