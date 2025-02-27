import React from 'react'
import ProductThumbnail from '../../assets/images/product-thumbnail.webp'
import Rating from '../Rating'
// import { Checkbox } from '@mui/material'
import EditDuotoneLine from '../../assets/icons/edit'
import EyeDuotone from '../../assets/icons/eye'
import TrashDuotoneLine from '../../assets/icons/trash'
import avatar from '../../assets/images/avatar.webp'
import { Avatar } from '@mui/material'
// import Checkbox from '../'

const checkboxStyle = {
    color: 'gray',
}

const UsersTailwindTable = ({ isChild }) => {
    return (
        <div class={`relative overflow-x-auto ${isChild ? '' : 'rounded-lg'}`}>
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-5">
                            {/* <Checkbox sx={checkboxStyle} /> */}
                            <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                            </div>
                        </th>
                        <th scope="col" class="px-6 py-5">
                            Name
                        </th>
                        <th scope="col" class="px-6 py-5">
                            Email
                        </th>
                        <th scope="col" class="px-6 py-5">
                            Location
                        </th>
                        <th scope="col" class="px-6 py-5">
                            Status
                        </th>
                        <th scope="col" class="px-6 py-5">
                            Spent
                        </th>
                        <th scope="col" class="px-6 py-5">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {new Array(10).fill(0).map((value, index) => (
                        <tr key={index} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            <td class="px-6 py-4">
                                {/* <Checkbox sx={checkboxStyle} /> */}
                                <div className="flex items-center h-5">
                                    <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                                </div>
                            </td>
                            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <div className='flex gap-2'>
                                    {/* <img src={ProductThumbnail}
                                        className='inline-flex items-center justify-center flex-shrink-0 object-cover rounded-lg'
                                        style={{ width: '80px', height: '80px' }}
                                    /> */}
                                    <Avatar src={avatar} sx={{}} />
                                    <div className='flex flex-col justify-center'>
                                        <span>John Cameron</span>
                                    </div>
                                </div>
                            </td>
                            <td class="px-6 py-4">
                                terrance_moreno@infotech.io
                            </td>
                            <td class="px-6 py-4">
                                New York, US
                            </td>
                            <td class="px-6 py-4">
                                <div className='flex items-center gap-2 text-green-600'>
                                    <span className='block w-[6px] h-[6px] bg-green-600 rounded-full'></span>
                                    <span>Active</span>
                                </div>
                                <div className='flex items-center gap-2 text-red-600'>
                                    <span className='block w-[6px] h-[6px] bg-red-600 rounded-full'></span>
                                    <span>Suspended</span>
                                </div>
                            </td>
                            <td class="px-6 py-4">
                                $4367.15
                            </td>
                            <td class="px-6 py-4">
                                <div className='flex gap-3'>
                                    <div className='flex justify-center items-center border w-[35px] h-[35px] rounded-md bg-gray-200 cursor-pointer'>
                                        <EditDuotoneLine fontSize={'25px'} color={'black'} backgroundColor={'red'} />
                                    </div>
                                    <div className='flex justify-center items-center border w-[35px] h-[35px] rounded-md bg-gray-200 cursor-pointer'>
                                        <EyeDuotone fontSize={'25px'} color={'black'} />
                                    </div>
                                    <div className='flex justify-center items-center border w-[35px] h-[35px] rounded-md bg-gray-200 cursor-pointer'>
                                        <TrashDuotoneLine fontSize={'25px'} color={'black'} />
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    )
}

export default UsersTailwindTable