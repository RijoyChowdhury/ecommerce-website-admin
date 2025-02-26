import React, { useState } from 'react'

const DropdownSelect = ({position}) => {
    const [openMenu, setOpenMenu] = useState(false);
    
    const toggleMenu = () => {
        setOpenMenu(state => !state)
        console.log('toggle')
    }

    const determineMenuPosition = () => {
        switch(position) {
            case 'bottom': return 'top-12';
            case 'top': return 'bottom-12';
            default: return 'top-12';
        }
    }

    return (
        <div className='relative'>
            <button
                id="dropdownHoverButton"
                data-dropdown-toggle="dropdownHover"
                data-dropdown-trigger="click"
                className="border border-gray-300 dark:border-blue-700 text-gray-700 bg-white dark:bg-blue-700 dark:text-white hover:ring-2 hover:ring-blue-500 focus:ring-2 focus:outline-none focus:ring-blue-500 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-blue-700"
                type="button"
                onClick={toggleMenu}
            >
                Dropdown
                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                </svg>
            </button>

            {/* <!-- Dropdown menu --> */}
            <div id="dropdownHover" className={`z-10 border border-gray-200 dark:border-gray-400 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 ${openMenu ? '' : 'hidden'} transition-all absolute ${determineMenuPosition()}`}>
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
                    <li>
                        <div className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={e => setOpenMenu(false)}>Dashboard</div>
                    </li>
                    <li>
                        <div className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={e => setOpenMenu(false)}>Settings</div>
                    </li>
                    <li>
                        <div className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={e => setOpenMenu(false)}>Earnings</div>
                    </li>
                    <li>
                        <div className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={e => setOpenMenu(false)}>Sign out</div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default DropdownSelect