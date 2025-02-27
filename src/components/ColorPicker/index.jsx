import React, { useEffect, useState } from 'react'
import Plus from '../../assets/icons/plus'

const ColorPicker = () => {
    const [color, setColor] = useState('#2563eb');
    const [open, setOpen] = useState(false);

    const openColorPickerTray = () => {
        setOpen(state => !state);
    }

    return (
        <div className='flex gap-3'>

            <div className='border-2 rounded-full w-10 h-10 flex items-center justify-center transition-all border-gray-200 dark:border-gray-500 bg-green-500'>
                <span className='text-white text-[20px]'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 12 12"
                        width="1em"
                        height="1em"
                        //{...props}
                    >
                        <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M10.78 2.62a.75.75 0 0 1 0 1.06L4.683 9.777a.75.75 0 0 1-1.069-.009L1.211 7.284a.75.75 0 0 1 1.078-1.043l1.873 1.936L9.72 2.62a.75.75 0 0 1 1.06 0"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </span>
            </div>
            <div className='border-2 rounded-full w-10 h-10 transition-all border-gray-200 dark:border-gray-500 bg-red-500'></div>
            <div className='border-2 rounded-full w-10 h-10 transition-all border-gray-200 dark:border-gray-500 bg-yellow-500'></div>
            <div className='border-2 rounded-full w-10 h-10 transition-all border-gray-200 dark:border-gray-500 bg-violet-500'></div>
            <div className='border-2 rounded-full w-10 h-10 transition-all border-gray-200 dark:border-gray-500 bg-blue-500'></div>
            <div className='border-2 rounded-full w-10 h-10 transition-all border-gray-200 dark:border-gray-500 bg-black'></div>

            <button className='rounded-md flex justify-center items-center gap-3 cursor-pointer px-5 py-2.5 text-gray-700 dark:text-gray-200 bg-gray-200 dark:bg-gray-700 ring-gray-200 dark:ring-gray-700'>
                <span><Plus /></span>
                <span>Add Cutom Color</span>
            </button>

        </div>
    )
}

export default ColorPicker
