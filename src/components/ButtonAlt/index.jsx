import React from 'react'

const ButtonAlt = ({ className, onClick, children }) => {
    return (
        <button
            className={`flex items-center justify-center gap-3 text-[15px] ring-1 ring-gray-200 text-gray-700 hover:text-blue-500 hover:ring-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-light rounded-lg px-5 py-2.5 text-center dark:text-white dark:hover:text-white dark:hover:ring-blue-600 dark:ring-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default ButtonAlt