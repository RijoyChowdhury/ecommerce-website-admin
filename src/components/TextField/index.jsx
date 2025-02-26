import React from 'react'

const TextField = ({className, placeholder}) => {
  return (
    <div>
        <input type="text" id="first_name" class={`bg-gray-50 border border-gray-200 text-gray-700 rounded-lg block py-2.5 px-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-200 dark:text-gray-200 focus:outline-none ${className}`} placeholder={placeholder} required />
    </div>
  )
}

export default TextField