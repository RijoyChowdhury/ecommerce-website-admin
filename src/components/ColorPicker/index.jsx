import React, { useEffect, useState } from 'react'
import Plus from '../../assets/icons/plus'
import TickMark from '../../assets/icons/tick';

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
                    <TickMark />
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
