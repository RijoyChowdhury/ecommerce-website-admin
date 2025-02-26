import React from 'react'
import DropdownSelect from '../../components/DropdownSelect'
import PaginationComponent from '../../components/Pagination'
import SearchBar from '../../components/SearchBar'
import ProductsTailwingTable from '../../components/ProductsTailwindTable'
import { Link } from 'react-router-dom'

const Products = () => {
    return (
        <>
            <div className='flex flex-col'>

                {/* Header and doc functionality */}
                <div className='flex justify-between'>
                    <div className='flex flex-col'>
                        <span className='text-[26px] font-semibold dark:text-gray-200'>Products</span>
                    </div>

                    <div className='flex gap-3'>
                        <button type="submit" className="flex items-center justify-center gap-3 text-[15px] ring-1 ring-gray-200 text-gray-700 hover:text-blue-500 hover:ring-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-light rounded-lg px-5 py-2.5 text-center dark:text-white dark:hover:text-white dark:hover:ring-blue-600 dark:ring-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    width="1em"
                                    height="1em"
                                //   {...props}
                                >
                                    <path
                                        fill="currentColor"
                                        d="M3 14.25a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75m.97-9.53a.75.75 0 1 0 1.06 1.06l2.22-2.22v7.69a.75.75 0 0 0 1.5 0V3.56l2.22 2.22a.75.75 0 1 0 1.06-1.06l-3.5-3.5a.75.75 0 0 0-1.06 0z"
                                    ></path>
                                </svg>
                            </span>
                            <span>Export</span>
                        </button>
                        <Link to='/products/upload' className="flex items-center justify-center gap-3 text-[15px] text-white bg-blue-500 hover:bg-blue-600 ring-1 focus:outline-none focus:ring-blue-300 font-light rounded-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:ring-blue-600 dark:ring-blue-600">
                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="1em"
                                    height="1em"
                                //   {...props}
                                >
                                    <path
                                        fill="currentColor"
                                        d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"
                                    ></path>
                                </svg>
                            </span>
                            <span>Add Product</span>
                        </Link>
                    </div>
                </div>

                {/* breadcrumbs */}
                <div className='mb-6'>
                    <span className='flex items-center font-light dark:text-gray-200'>
                        <Link to='/' className='hover:underline'>Home</Link>
                        <span className='block w-[6px] h-[6px] bg-gray-500 rounded-full mx-2'></span>
                        Products
                        <span className='block w-[6px] h-[6px] bg-gray-500 rounded-full mx-2'></span>
                        List
                    </span>
                </div>

                {/* search and filter */}
                <div className='flex mb-4'>

                    <div class="relative w-full">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none dark:text-gray-200">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                width="1em"
                                height="1em"
                            //   {...props}
                            >
                                <path
                                    fill="currentColor"
                                    d="m17.545 15.467l-3.779-3.779a6.15 6.15 0 0 0 .898-3.21c0-3.417-2.961-6.377-6.378-6.377A6.185 6.185 0 0 0 2.1 8.287c0 3.416 2.961 6.377 6.377 6.377a6.15 6.15 0 0 0 3.115-.844l3.799 3.801a.953.953 0 0 0 1.346 0l.943-.943c.371-.371.236-.84-.135-1.211M4.004 8.287a4.28 4.28 0 0 1 4.282-4.283c2.366 0 4.474 2.107 4.474 4.474a4.284 4.284 0 0 1-4.283 4.283c-2.366-.001-4.473-2.109-4.473-4.474"
                                ></path>
                            </svg>
                        </div>
                        <input type="text" id="simple-search" class="w-[350px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search branch name..." required />
                    </div>

                    <div className='flex gap-3'>

                        <button type="submit" className="flex items-center justify-center gap-3 text-[15px] ring-1 ring-gray-200 text-gray-700 hover:text-blue-500 hover:ring-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-light rounded-lg px-5 py-2.5 text-center dark:text-white dark:hover:text-white dark:hover:ring-blue-600 dark:ring-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 14 14"
                                    width="1em"
                                    height="1em"
                                //   {...props}
                                >
                                    <path
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M13.5.5H.5l5 7v6l3-2v-4z"
                                    ></path>
                                </svg>
                            </span>
                            <span>Filter</span>
                        </button>

                        <button type="submit" className="flex items-center justify-center gap-3 text-[15px] ring-1 ring-gray-200 text-gray-700 hover:text-blue-500 hover:ring-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-light rounded-lg px-5 py-2.5 text-center dark:text-white dark:hover:text-white dark:hover:ring-blue-600 dark:ring-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="1em"
                                    height="1em"
                                //   {...props}
                                >
                                    <path
                                        fill="currentColor"
                                        d="M3 3h8v2H3zm10 0h8v2h-8zM3 7h8v2H3zm10 0h8v2h-8zM3 11h8v2H3zm10 0h8v2h-8zM3 15h8v2H3zm10 0h8v2h-8zM3 19h8v2H3zm10 0h8v2h-8z"
                                    ></path>
                                </svg>
                            </span>
                            {/* <span>Filter</span> */}
                        </button>

                    </div>

                </div>

                {/* Products table */}
                <div className='border border-gray-200 dark:border-gray-700 rounded-lg'>
                    <ProductsTailwingTable />
                </div>

                {/* Pagination */}
                <div className=' dark:text-white flex items-center justify-between gap-3 mt-4'>
                    <div className='flex items-center gap-3'>
                        <span className='font-[300]'>Rows per page</span>
                        <DropdownSelect position={'top'} />
                    </div>
                    <div className='flex items-center justify-between gap-3'>
                        <span className='font-[300]'>Page 3 of 10</span>
                        <PaginationComponent />
                    </div>
                </div>


            </div>
        </>
    )
}

export default Products