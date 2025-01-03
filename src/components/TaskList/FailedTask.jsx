import React from 'react'

const FailedTask = ({data}) => {
    return (
        <div className='h-full flex-shrink-0 w-[350px] p-5 bg-yellow-400 rounded-xl'>
            <div className='flex items-center justify-between'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm font-semibold'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold '>{data.taskTitle}</h2>
            <p className='text-md mt-2 '>{data.taskDescription}</p>
            <div className='mt-2'>
                <button className='w-full'>Failed</button>
            </div>
        </div>
    )
}

export default FailedTask