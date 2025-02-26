import React from 'react'
import FlashCard from '../../components/FlashCard'
import WavingHand from '../../assets/icons/waveHand'
import ShopIllustration from '../../assets/images/shop-illustration.webp'
import { Pagination } from '@mui/material'
import { FaPlus } from 'react-icons/fa6'
import TailwingTable from '../../components/TailwindTable'
import PaginationComponent from '../../components/Pagination'
import ProductsTailwingTable from '../../components/ProductsTailwindTable'
import DropdownSelect from '../../components/DropdownSelect'
import SearchBar from '../../components/SearchBar'
import CustomRadarChart from '../../components/Charts/RadarChart'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'

const Dashboard = () => {
    return (
        <>
            <div className='flex flex-col gap-5'>

                <div className='flex gap-5'>

                    <div className='w-[70%] flex flex-col gap-5'>

                        {/* header jumbo card */}
                        <div className='w-full p-10 flex items-center rounded-md border border-[rgba(0,0,0,0.1)] dark:bg-gray-800 dark:text-white'>
                            <div className='info flex justify-between w-full relative'>
                                <div className='left-section flex flex-col justify-between gap-10'>
                                    <div>
                                        <h1 className='text-[35px] font-bold mb-3 flex'>
                                            <span className='flex flex-col leading-10'>
                                                Good Morning,<br />
                                                <span className='flex'>Cameron<WavingHand className="ml-3" /></span>
                                            </span>
                                        </h1>
                                        <p>
                                            Here’s What happening on your store today. See the statistics at once.
                                        </p>
                                    </div>
                                    <div>
                                        <Link to='/products/upload'>
                                            <Button className='w-[250px] h-[50px]'>
                                                <FaPlus />
                                                <span>Add Product</span>
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                                <div className='right-section absolute -right-10 -bottom-15'>
                                    <img src={ShopIllustration} width={'360px'} />
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-between'>
                            <FlashCard opt={1} text={'New Order'} />
                            <FlashCard opt={2} text={'Sales'} />
                            <FlashCard opt={3} text={'Revenue'} />
                        </div>

                    </div>

                    <div className='w-[30%] border border-gray-200 dark:border-gray-700 rounded-md flex justify-center items-center'>
                        <CustomRadarChart />
                    </div>

                </div>

                {/* Sales table */}
                <div className='border border-gray-200 dark:border-gray-700 sm:rounded-lg'>
                    <div className='flex items-center justify-between p-5'>
                        <h2 className='text-[18px] font-[600] dark:text-gray-200'>Recent Orders</h2>
                    </div>
                    <TailwingTable isChild={true} />
                    <div className='dark:bg-gray-900 dark:text-white flex items-center justify-between p-3 gap-3 sm:rounded-b-lg'>
                        <div className='flex items-center gap-3'>
                            <span className='font-[300]'>Rows per page</span>
                            <DropdownSelect />
                        </div>
                        <div className='flex items-center justify-between gap-3'>
                            <span className='font-[300]'>Page 3 of 10</span>
                            <PaginationComponent />
                        </div>
                    </div>
                </div>

                {/* Products table */}
                <div className='border border-gray-200 dark:border-gray-700 sm:rounded-lg'>
                    <div className='flex items-center justify-between p-5'>
                        <div className='flex items-center gap-3'>
                            <h2 className='text-[18px] font-[600] dark:text-gray-200'>Products</h2>
                            <DropdownSelect />
                        </div>
                        <SearchBar />
                    </div>
                    <ProductsTailwingTable isChild={true} />
                    <div className='dark:bg-gray-900 dark:text-white flex items-center justify-between p-3 gap-3 sm:rounded-b-lg'>
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

            </div>
        </>
    )
}

export default Dashboard