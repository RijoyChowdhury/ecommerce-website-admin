import React from 'react'

const TailwingTable = ({isChild}) => {
    return (
        <div class={`relative overflow-x-auto ${isChild ? '' : 'rounded-lg'}`}>
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-7">
                            Order Id
                        </th>
                        <th scope="col" class="px-6 py-5">
                            Products
                        </th>
                        <th scope="col" class="px-6 py-7">
                            Total
                        </th>
                        <th scope="col" class="px-6 py-7">
                            Status
                        </th>
                        <th scope="col" class="px-6 py-7">
                            Customer
                        </th>
                        <th scope="col" class="px-6 py-7">
                            Contact No.
                        </th>
                        <th scope="col" class="px-6 py-7">
                            Delivery Address
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {new Array(10).fill(0).map((value, index) => (
                        <tr key={index} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                7623rtdg7623rtdg7623rtdg
                            </td>
                            <td class="px-6 py-7">
                                View Items
                            </td>
                            <td class="px-6 py-7">
                                $2,900
                            </td>
                            <td class="px-6 py-7">
                                Pending
                            </td>
                            <td class="px-6 py-7">
                                Kevin Frost
                            </td>
                            <td class="px-6 py-7">
                                987654321
                            </td>
                            <td class="px-6 py-7">
                                228/5, SP Avenue, Kolkata
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    )
}

export default TailwingTable