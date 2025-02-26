import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import DashboardVertDuotone from '../../assets/icons/dashboard'
import UsersDuotone from '../../assets/icons/users'
import InventoryDuotone from '../../assets/icons/inventory'
import InvoiceDuotone from '../../assets/icons/invoice'
import LogoutSquare01 from '../../assets/icons/logout'
import BookmarkLineDuotone from '../../assets/icons/bookmark'
import ImgBoxDuotoneLine from '../../assets/icons/imageBox'
import ChevronDownDuotone from '../../assets/icons/chevronDown'
import { Collapse } from 'react-collapse'
import './style.css'
import LogoFull from '../../assets/icons/logoFull'
import { SiPanasonic } from 'react-icons/si'

const blankSectionState = {
    section1: false,
    section2: false,
    section3: false,
}

const buttonStyle = {
    // color: 'var(--color-gray-700)',
}

const Sidebar = () => {
    const [openSection, setOpenSection] = useState({ ...blankSectionState });

    const handleClick = (sectionId) => {
        setOpenSection(state => ({ ...blankSectionState, [sectionId]: !state[sectionId] }));
    }

    return (
        // fixed top-0 left-0
        <div className='sidebar py-3 px-5 w-full h-full bg-white border-r border-gray-200 dark:border-gray-700 dark:bg-gray-900'>
            {/* Logo section */}
            <div className='w-full py-2 px-2'>
                <Link to='/'>
                    <span className='text-gray-700 dark:text-gray-200'><LogoFull width={'200px'} /></span>
                </Link>
            </div>

            {/* Item section */}
            <ul className='mt-4'>
                <li>
                    <Link to="/">
                        <div className='w-full rounded-md px-2 py-3 hover:bg-gray-200 text-gray-700 dark:text-gray-200 dark:hover:text-gray-700 flex !justify-start !items-center gap-3 !text-[14px] !font-[500]'>
                            <span><DashboardVertDuotone fontSize={'25px'} /></span>
                            <span>Dashboard</span>
                        </div>
                    </Link>
                </li>

                <li>
                    <Link to="#">
                        <div id="section1" className='w-full rounded-md px-2 py-3 hover:bg-gray-200 text-gray-700 dark:text-gray-200 dark:hover:text-gray-700 flex !justify-start !items-center gap-3 !text-[14px] !font-[500]' onClick={() => handleClick('section1')}>
                            <span><ImgBoxDuotoneLine fontSize={'25px'} /></span>
                            <span>Home Slides</span>
                            <span className="ml-auto"><ChevronDownDuotone fontSize={'25px'} className={`transition-all ${openSection.section1 ? 'rotate-180' : ''}`} /></span>
                        </div>
                    </Link>

                    <Collapse isOpened={openSection.section1}>
                        <ul>
                            <li>
                                <Link to="/addBanner">
                                    <div className='rounded-md px-2 py-3 hover:bg-gray-200 text-gray-700 dark:text-gray-200 dark:hover:text-gray-700 justify-start w-full text-[13px] font-[500] pl-11 flex items-center gap-3'>
                                        <span className='block w-[6px] h-[6px] bg-gray-500 rounded-full'></span>
                                        <span>Add Banner</span>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </Collapse>
                </li>

                <li>
                    <Link to="/users">
                        <div className='w-full rounded-md px-2 py-3 hover:bg-gray-200 text-gray-700 dark:text-gray-200 dark:hover:text-gray-700 flex !justify-start !items-center gap-3 !text-[14px] !font-[500]'>
                            <span><UsersDuotone fontSize={'25px'} /></span>
                            <span>Users</span>
                        </div>
                    </Link>
                </li>

                <li>
                    <Link to="#">
                        <div id="section2" className='w-full rounded-md px-2 py-3 hover:bg-gray-200 text-gray-700 dark:text-gray-200 dark:hover:text-gray-700 flex !justify-start !items-center gap-3 !text-[14px] !font-[500]' onClick={() => handleClick('section2')}>
                            <span><InventoryDuotone fontSize={'25px'} /></span>
                            <span>Products</span>
                            <span className="ml-auto"><ChevronDownDuotone fontSize={'25px'} className={`transition-all ${openSection.section2 ? 'rotate-180' : ''}`} /></span>
                        </div>
                    </Link>

                    <Collapse isOpened={openSection.section2}>
                        <ul>
                            <li>
                                <Link to="/products">
                                    <div className='rounded-md px-2 py-3 hover:bg-gray-200 text-gray-700 dark:text-gray-200 dark:hover:text-gray-700 flex !justify-start items-center !w-full !text-[13px] !font-[500] !pl-11 gap-3'>
                                        <span className='block w-[6px] h-[6px] bg-gray-500 rounded-full'></span>
                                        <span>Product List</span>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/products/upload">
                                    <div className='rounded-md px-2 py-3 hover:bg-gray-200 text-gray-700 dark:text-gray-200 dark:hover:text-gray-700 flex !justify-start items-center !w-full !text-[13px] !font-[500] !pl-11 gap-3'>
                                        <span className='block w-[6px] h-[6px] bg-gray-500 rounded-full'></span>
                                        <span>Product Upload</span>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </Collapse>
                </li>

                <li>
                    <Link to="#">
                        <div id="section3" className='w-full rounded-md px-2 py-3 hover:bg-gray-200 text-gray-700 dark:text-gray-200 dark:hover:text-gray-700 flex !justify-start !items-center gap-3 !text-[14px] !font-[500]' onClick={() => handleClick('section3')}>
                            <span><BookmarkLineDuotone fontSize={'25px'} /></span>
                            <span>Category</span>
                            <span className="ml-auto"><ChevronDownDuotone fontSize={'25px'} className={`transition-all ${openSection.section3 ? 'rotate-180' : ''}`} /></span>
                        </div>
                    </Link>

                    <Collapse isOpened={openSection.section3}>
                        <ul>
                            <li>
                                <Link to="/category">
                                    <div className='!py-3 hover:bg-gray-200 text-gray-700 dark:text-gray-200 dark:hover:text-gray-700 !justify-start items-center !w-full !text-[13px] !font-[500] !pl-11 flex gap-3'>
                                        <span className='block w-[6px] h-[6px] bg-gray-500 rounded-full'></span>
                                        <span>Category List</span>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/addCategory">
                                    <div className='!py-3 hover:bg-gray-200 text-gray-700 dark:text-gray-200 dark:hover:text-gray-700 !justify-start items-center !w-full !text-[13px] !font-[500] !pl-11 flex gap-3'>
                                        <span className='block w-[6px] h-[6px] bg-gray-500 rounded-full'></span>
                                        <span>Add Category</span>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </Collapse>
                </li>

                <li>
                    <Link to="/orders">
                        <div sx={buttonStyle} className='w-full rounded-md px-2 py-3 hover:bg-gray-200 text-gray-700 dark:text-gray-200 dark:hover:text-gray-700 flex !justify-start !items-center gap-3 !text-[14px] !font-[500]'>
                            <span><InvoiceDuotone fontSize={'25px'} /></span>
                            <span>Orders</span>
                        </div>
                    </Link>
                </li>

                <li>
                    <Link to="#">
                        <div sx={buttonStyle} className='w-full rounded-md px-2 py-3 hover:bg-gray-200 text-gray-700 dark:text-gray-200 dark:hover:text-gray-700 flex !justify-start !items-center gap-3 !text-[14px] !font-[500]'>
                            <span><LogoutSquare01 fontSize={'25px'} /></span>
                            <span>Logout</span>
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar