import React, { useEffect, useRef, useState } from 'react'
import Button from '../Button';

const DropdownSelect = ({ position }) => {
    const [openMenu, setOpenMenu] = useState(false);
    const dropdownMenuRef = useRef();

    const toggleMenu = () => {
        setOpenMenu(state => !state)
        console.log('toggle')
    }

    const determineMenuPosition = () => {
        switch (position) {
            case 'bottom': return 'top-12';
            case 'top': return 'bottom-12';
            default: return 'top-12';
        }
    }

    useEffect(() => {
        let handler = (event) => {
            if (dropdownMenuRef?.current && !dropdownMenuRef?.current.contains(event.target)) {
                setOpenMenu(false);
            }
        }
        document.addEventListener('mousedown', handler);

        return () => {
            document.removeEventListener('mousedown', handler);
        }
    }, []);

    return (
        <div ref={dropdownMenuRef} className='relative'>
            <Button
                id="dropdownHoverButton"
                data-dropdown-toggle="dropdownHover"
                data-dropdown-trigger="click"
                onClick={toggleMenu}
            >
                Dropdown
                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                </svg>
            </Button>

            {/* <!-- Dropdown menu --> */}
            <div id="dropdownMenu" className={`z-10 rounded-lg shadow-sm w-44 border border-gray-200 dark:border-gray-400 bg-white divide-y divide-gray-100 dark:bg-gray-700 ${openMenu ? '' : 'opacity-0'} transition-all absolute ${determineMenuPosition()}`}>
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
                    <li>
                        <div className="block rounded-md mx-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={e => setOpenMenu(false)}>Dashboard</div>
                    </li>
                    <li>
                        <div className="block rounded-md mx-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={e => setOpenMenu(false)}>Settings</div>
                    </li>
                    <li>
                        <div className="block rounded-md mx-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={e => setOpenMenu(false)}>Earnings</div>
                    </li>
                    <li>
                        <div className="block rounded-md mx-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={e => setOpenMenu(false)}>Sign out</div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default DropdownSelect