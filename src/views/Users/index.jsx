import React from 'react'
import ButtonAlt from '../../components/ButtonAlt'
import Export from '../../assets/icons/export'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import Plus from '../../assets/icons/plus'
import Magnifier from '../../assets/icons/magnifier'
import Filter from '../../assets/icons/filter'
import Tabs from '../../assets/icons/tabs'
import UsersTailwindTable from '../../components/UsersTailwindTable'

const Users = () => {
    return (
        <>
            <div className='flex flex-col'>
                {/* Header and doc functionality */}
                <div className='flex justify-between'>
                    <div className='flex flex-col'>
                        <span className='text-[26px] font-semibold dark:text-gray-200'>Users</span>
                    </div>

                    <div className='flex gap-3'>

                        <ButtonAlt>
                            <span>
                                <Export />
                            </span>
                            <span>Export</span>
                        </ButtonAlt>

                        <Link to='#'>
                            <Button>
                                <span>
                                    <Plus />
                                </span>
                                <span>Add User</span>
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* breadcrumbs */}
                <div className='mb-6'>
                    <span className='flex items-center font-light dark:text-gray-200'>
                        <Link to='/' className='hover:underline'>Home</Link>
                        <span className='block w-[6px] h-[6px] bg-gray-500 rounded-full mx-2'></span>
                        Users
                        <span className='block w-[6px] h-[6px] bg-gray-500 rounded-full mx-2'></span>
                        List
                    </span>
                </div>

                {/* search and filter */}
                <div className='flex mb-4'>

                    <div class="relative w-full">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none dark:text-gray-200">
                            <span className="absolute text-gray-500"><Magnifier /></span>
                        </div>
                        <input type="text" id="simple-search" class="w-[350px] bg-gray-50 border border-gray-300 text-gray-900 text-sm font-light rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search by user name..." required />
                    </div>

                    <div className='flex gap-3'>

                        <ButtonAlt >
                            <span>
                                <Filter />
                            </span>
                            <span>Filter</span>
                        </ButtonAlt>

                        <ButtonAlt>
                            <span>
                                <Tabs />
                            </span>
                        </ButtonAlt>

                    </div>
                </div>

                {/* Users table */}
                <UsersTailwindTable />

            </div>
        </>
    )
}

export default Users