import React from 'react'

const Button = ({ className, onClick, children }) => {
    return (
        <button
            className={`flex items-center justify-center gap-3 text-[15px] font-light rounded-md px-5 py-2.5 text-center cursor-pointer focus:outline-none text-white bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button