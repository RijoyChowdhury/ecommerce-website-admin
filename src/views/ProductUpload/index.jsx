import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import TrashDuotoneLine from '../../assets/icons/trash'
import Button from '../../components/Button'
import Save from '../../assets/icons/save'
import Upload from '../../assets/icons/upload'
import DropdownSelect from '../../components/DropdownSelect'
import TextField from '../../components/TextField'
import { Divider } from '@mui/material'
import ColorPicker from '../../components/ColorPicker'

const ProductUpload = () => {
    return (
        <>
            <div className='h-full relative !-mb-6'>

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
                <div className='border-b border-gray-300 dark:border-gray-600 py-4'>
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

                    <div className='w-[70%] flex flex-col text-[15px] font-light pl-15 gap-3'>
                        <div className='flex gap-5'>
                            <div className='w-[50%] flex flex-col gap-3'>
                                <div>
                                    <label for="oroduct_title" className="block mb-2 text-gray-900 dark:text-white">Title</label>
                                    <TextField placeholder='Product Title' className="w-full" />
                                </div>

                                <div>
                                    <label for="product_type" class="block mb-2 text-gray-900 dark:text-white">Product Type</label>
                                    <DropdownSelect className="w-full" />
                                </div>
                            </div>
                            <div className='w-[50%] flex flex-col gap-3'>
                                <div>
                                    <label for="first_name" class="block mb-2 text-gray-900 dark:text-white">Brand</label>
                                    <TextField placeholder='Product Brand' className="w-full" />
                                </div>

                                <div>
                                    <label for="first_name" class="block mb-2 text-gray-900 dark:text-white">Categories</label>
                                    <DropdownSelect className="w-full" />
                                </div>
                            </div>
                        </div>

                        <div className=''>
                            <div className=''>
                                <label for="message" class="block mb-2 text-gray-900 dark:text-white">Description</label>
                                <textarea id="message" rows="4" class="block p-2.5 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=""></textarea>
                            </div>
                        </div>
                    </div>
                </div>

                <Divider className='bg-gray-100 dark:bg-gray-600' />

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
                                <Upload />
                            </span>
                            <span className='text-gray-700 dark:text-gray-200 text-[15px]'>Upload Images</span>
                        </div>
                    </div>
                </div>

                <Divider className='bg-gray-100 dark:bg-gray-600' />

                <div className='flex my-5'>
                    <div className='w-[30%] flex flex-col'>
                        <span className='dark:text-gray-200'>Pricing</span>
                        <span className='font-light text-[14px] text-gray-500'>
                            Add your product pricing here
                        </span>
                    </div>

                    <div className='w-[70%] flex flex-col text-[15px] font-light pl-15'>
                        <div className='flex gap-5'>
                            <div className='w-[50%] flex flex-col gap-3'>
                                <div className='relative'>
                                    <label for="oroduct_title" className="block mb-2 text-gray-900 dark:text-white">Price</label>
                                    <TextField placeholder='50' className="w-full pl-6" />
                                    <span className='absolute top-10 left-3 text-gray-900 dark:text-white'>$</span>
                                </div>


                                <div className='relative'>
                                    <label for="oroduct_title" className="block mb-2 text-gray-900 dark:text-white">Cost Price</label>
                                    <TextField placeholder='50' className="w-full pl-6" />
                                    <span className='absolute top-10 left-3 text-gray-900 dark:text-white'>$</span>
                                </div>
                            </div>
                            <div className='w-[50%] flex flex-col gap-3'>
                                <div className='relative'>
                                    <label for="first_name" class="block mb-2 text-gray-900 dark:text-white">Retail Price</label>
                                    <TextField placeholder='50' className="w-full pl-6" />
                                    <span className='absolute top-10 left-3 text-gray-900 dark:text-white'>$</span>
                                </div>

                                <div className='relative'>
                                    <label for="oroduct_title" className="block mb-2 text-gray-900 dark:text-white">Sale Price</label>
                                    <TextField placeholder='50' className="w-full pl-6" />
                                    <span className='absolute top-10 left-3 text-gray-900 dark:text-white'>$</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <Divider className='bg-gray-100 dark:bg-gray-600' />

                <div className='flex my-5'>
                    <div className='w-[30%] flex flex-col'>
                        <span className='dark:text-gray-200'>Inventory Tracking</span>
                        <span className='font-light text-[14px] text-gray-500'>
                            Add your product inventory info here
                        </span>
                    </div>

                    <div className='w-[70%] flex flex-col text-[15px] font-light pl-15'>
                        <div className='flex flex-col gap-3'>
                            <div className='flex flex-col gap-2'>

                                <div class="flex items-center">
                                    <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="default-radio-1" class="ms-2 text-gray-900 dark:text-gray-300">Track inventory for this product</label>
                                </div>
                                <div class="flex items-center">
                                    <input id="default-radio-2" type="radio" value="" name="default-radio" class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="default-radio-2" class="ms-2 text-gray-900 dark:text-gray-300">Do not track inventory for this product</label>
                                </div>

                            </div>
                            <div className='flex gap-5'>
                                <div className='w-full'>
                                    <label for="first_name" class="block mb-2 text-gray-900 dark:text-white">Current Stock Level</label>
                                    <TextField placeholder='50' className="w-full" />
                                </div>
                                <div className='w-full'>
                                    <label for="oroduct_title" className="block mb-2 text-gray-900 dark:text-white">Full Stock Level</label>
                                    <TextField placeholder='50' className="w-full" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <Divider className='bg-gray-100 dark:bg-gray-600' />

                <div className='flex my-5'>
                    <div className='w-[30%] flex flex-col'>
                        <span className='dark:text-gray-200'>Product colors</span>
                        <span className='font-light text-[14px] text-gray-500'>
                            Add your available product color
                        </span>
                    </div>

                    <div className='w-[70%] flex flex-col text-[15px] font-light pl-15'>
                    <ColorPicker />

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