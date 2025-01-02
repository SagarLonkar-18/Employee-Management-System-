import React from 'react'

const NewTask = () => {
    return (
        <div className='h-full flex-shrink-0 w-[350px] p-5 bg-green-400 rounded-xl'>
            <div className='flex items-center justify-between'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm font-semibold'>1 Jan 2025</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold '>Go to Gym</h2>
            <p className='text-md mt-2 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex nulla vero modi eligendi laudantium sit sed fuga dignissimos alias tempora!</p>
            <div className='mt-4'>
                <button>Accept Task</button>
            </div>
        </div>
    )
}

export default NewTask