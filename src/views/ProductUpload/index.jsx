import React from 'react'
import { Link } from 'react-router-dom'
import TrashDuotoneLine from '../../assets/icons/trash'
import Button from '../../components/Button'
import Save from '../../assets/icons/save'
import DropdownSelect from '../../components/DropdownSelect'
import TextField from '../../components/TextField'
import { Divider } from '@mui/material'

const ProductUpload = () => {
    return (
        <>
            <div className='h-full relative !-mb-5'>

                {/* Header and doc functionality */}
                <div className='flex justify-between'>
                    <div className='flex flex-col'>
                        <span className='text-[26px] font-semibold dark:text-gray-200'>Products</span>
                    </div>

                    <div className='flex gap-3'>
                        <Button className="">
                            <span>
                                <TrashDuotoneLine fontSize={'20px'} />
                            </span>
                            <span>Reset Fields</span>
                        </Button>
                    </div>
                </div>


                {/* breadcrumbs */}
                <div className='mb-6'>
                    <span className='flex items-center font-light dark:text-gray-200'>
                        <Link to='/' className='hover:underline'>Home</Link>
                        <span className='block w-[6px] h-[6px] bg-gray-500 rounded-full mx-2'></span>
                        Products
                        <span className='block w-[6px] h-[6px] bg-gray-500 rounded-full mx-2'></span>
                        Create
                    </span>
                </div>

                {/* tab sections */}
                <div className='border-b border-gray-300 py-4'>
                    <ul className='flex gap-10 font-[400] text-[14px] text-gray-400'>
                        <li className='hover:text-gray-700 dark:hover:text-gray-200'>Summary</li>
                        <li className='hover:text-gray-700 dark:hover:text-gray-200'>Images & Gallery</li>
                        <li className='hover:text-gray-700 dark:hover:text-gray-200'>Pricing & Inventory</li>
                        <li className='hover:text-gray-700 dark:hover:text-gray-200'>Product Identifiers & Custom Fields</li>
                        <li className='hover:text-gray-700 dark:hover:text-gray-200'>Variant Options</li>
                    </ul>
                </div>

                {/* main content */}
                <div className='flex my-5'>
                    <div className='w-[30%] flex flex-col'>
                        <span className='dark:text-gray-200'>Summary</span>
                        <span className='font-light text-[14px] text-gray-500'>
                            Edit your product description and necessary information from here
                        </span>
                    </div>

                    <div className='w-[70%] flex flex-col text-[15px] font-light pl-15'>
                        <div className='flex gap-5'>
                            <div className='w-[50%]'>
                                <div>
                                    <label for="oroduct_title" className="block mb-2 text-gray-900 dark:text-white">Title</label>
                                    <TextField placeholder='Product Title' className="w-full" />
                                </div>


                                <div className='mt-2'>
                                    <label for="product_type" class="block mb-2 text-gray-900 dark:text-white">Product Type</label>
                                    <DropdownSelect className="w-full" />
                                </div>
                            </div>
                            <div className='w-[50%]'>
                                <div>
                                    <label for="first_name" class="block mb-2 text-gray-900 dark:text-white">Brand</label>
                                    <TextField placeholder='Product Brand' className="w-full" />
                                </div>

                                <div className='mt-2'>
                                    <label for="first_name" class="block mb-2 text-gray-900 dark:text-white">Categories</label>
                                    <DropdownSelect className="w-full" />
                                </div>
                            </div>
                        </div>

                        <div className=''>
                            <div className='mt-2'>
                                <label for="message" class="block mb-2 text-gray-900 dark:text-white">Description</label>
                                <textarea id="message" rows="4" class="block p-2.5 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=""></textarea>
                            </div>
                        </div>
                    </div>
                </div>

                <Divider />

                <div className='flex my-5'>
                    <div className='w-[30%] flex flex-col'>
                        <span className='dark:text-gray-200'>Upload product images</span>
                        <span className='font-light text-[14px] text-gray-500'>
                            Upload your product image gallery here
                        </span>
                    </div>

                    <div className='w-[70%] flex flex-col text-[15px] font-light pl-15'>
                        <div className='flex flex-col items-center justify-center border rounded-md h-[100px] border-gray-200 dark:border-gray-700'>
                            <span className='text-gray-700 dark:text-gray-200 text-[50px]'>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    width="1em"
                                    height="1em"
                                    //{...props}
                                >
                                    <path
                                        fill="currentColor"
                                        fillRule="evenodd"
                                        d="M256 289.83L350.17 384L320 414.17l-42.667-42.654v97.838h-42.666v-97.84L192 414.17L161.83 384zM298.667 64c58.91 0 106.667 47.756 106.667 106.667l-.033 2.683c36.814 9.449 64.033 42.87 64.033 82.65c0 45.7-35.925 83.01-81.075 85.229l-4.259.104h-33.83l-42.658-42.658l75.442.004l3.21-.065c22.613-1.112 40.503-19.849 40.503-42.614c0-18.434-11.805-34.533-28.74-40.354l-3.233-.969l-32.885-8.44l.858-35.57c0-35.347-28.654-64-64-64c-21.47 0-41.047 10.625-52.844 27.902l-2.254 3.543l-19.2 32.463l-34.574-15.072c-9.295-4.052-19.357-6.17-29.795-6.17c-41.237 0-74.666 33.43-74.666 74.667c0 37.37 27.59 68.689 63.91 73.903l3.924.458l3.526.306l47.8.002l-42.664 42.664h-12.496l.008-.477C89.535 335.47 42.667 285.209 42.667 224c0-64.801 52.532-117.333 117.333-117.333c16.653 0 32.496 3.469 46.845 9.724C225.395 85.03 259.575 64 298.667 64"
                                    ></path>
                                </svg>
                            </span>
                            <span className='text-gray-700 dark:text-gray-200 text-[15px]'>Upload Images</span>
                        </div>
                    </div>
                </div>

                <Divider />

                <div className='flex my-5'>
                    <div className='w-[30%] flex flex-col'>
                        <span className='dark:text-gray-200'>Summary</span>
                        <span className='font-light text-[14px] text-gray-500'>
                            Edit your product description and necessary information from here
                        </span>
                    </div>

                    <div className='w-[70%] flex flex-col text-[15px] font-light pl-15'>
                        <div className='flex gap-5'>
                            <div className='w-[50%]'>
                                <div>
                                    <label for="oroduct_title" className="block mb-2 text-gray-900 dark:text-white">Title</label>
                                    <TextField placeholder='Product Title' className="w-full" />
                                </div>


                                <div className='mt-2'>
                                    <label for="product_type" class="block mb-2 text-gray-900 dark:text-white">Product Type</label>
                                    <DropdownSelect className="w-full" />
                                </div>
                            </div>
                            <div className='w-[50%]'>
                                <div>
                                    <label for="first_name" class="block mb-2 text-gray-900 dark:text-white">Brand</label>
                                    <TextField placeholder='Product Brand' className="w-full" />
                                </div>

                                <div className='mt-2'>
                                    <label for="first_name" class="block mb-2 text-gray-900 dark:text-white">Categories</label>
                                    <DropdownSelect className="w-full" />
                                </div>
                            </div>
                        </div>

                        <div className=''>
                            <div className='mt-2'>
                                <label for="message" class="block mb-2 text-gray-900 dark:text-white">Description</label>
                                <textarea id="message" rows="4" class="block p-2.5 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=""></textarea>
                            </div>
                        </div>
                    </div>
                </div>

                {/* submit section */}
                <div className='bg-white dark:bg-gray-900 sticky z-10 bottom-0 border-t border-gray-200 dark:border-gray-700 p-3 -mx-5'>
                    <div className='flex justify-end gap-3'>
                        <Link to='/products'>
                            <Button>
                                <span><Save /></span>
                                <span>Save Product</span>
                            </Button>
                        </Link>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ProductUpload