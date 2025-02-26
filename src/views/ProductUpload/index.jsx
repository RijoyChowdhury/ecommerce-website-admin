import React from 'react'
import { Link } from 'react-router-dom'
import TrashDuotoneLine from '../../assets/icons/trash'
import Button from '../../components/Button'
import Save from '../../assets/icons/save'

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
                <div className='border w-[30%] h-[100px]'></div>

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