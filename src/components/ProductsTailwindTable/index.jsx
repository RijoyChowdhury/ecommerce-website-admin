import React from 'react'
import ProductThumbnail from '../../assets/images/product-thumbnail.webp'
import Rating from '../Rating'
import EditDuotoneLine from '../../assets/icons/edit'
import EyeDuotone from '../../assets/icons/eye'
import TrashDuotoneLine from '../../assets/icons/trash'

const checkboxStyle = {
    color: 'gray',
}

const ProductsTailwingTable = ({ isChild }) => {
    return (
        <div class={`relative overflow-x-auto ${isChild ? '' : 'rounded-lg'}`}>
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-5">
                            <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                            </div>
                        </th>
                        <th scope="col" class="px-6 py-5">
                            Products
                        </th>
                        <th scope="col" class="px-6 py-5">
                            Category
                        </th>
                        <th scope="col" class="px-6 py-5">
                            Price
                        </th>
                        <th scope="col" class="px-6 py-5">
                            Rating
                        </th>
                        <th scope="col" class="px-6 py-5">
                            Sales
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
                                <div className="flex items-center h-5">
                                    <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                                </div>
                            </td>
                            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <div className='flex gap-2'>
                                    <img src={ProductThumbnail}
                                        className='inline-flex items-center justify-center flex-shrink-0 object-cover rounded-lg'
                                        style={{ width: '80px', height: '80px' }}
                                    />
                                    <div className='flex flex-col justify-center'>
                                        <span>Rustic Steel Computer</span>
                                        <span className='font-[200]'>Electronics</span>
                                    </div>
                                </div>
                            </td>
                            <td class="px-6 py-4">
                                Electronics {'>'} Portable
                            </td>
                            <td class="px-6 py-4">
                                $2,900
                            </td>
                            <td class="px-6 py-4">
                                <Rating />
                            </td>
                            <td class="px-6 py-4">
                                368
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

export default ProductsTailwingTable