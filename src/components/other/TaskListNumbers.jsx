import React from 'react'

const TaskListNumbers = ({data}) => {
    return (
        <div className='flex mt-10 w-screen justify-between gap-5 px-8'>
            <div className='w-[45%] bg-red-400 rounded-xl px-10 py-6'>
                <h2 className='text-3xl font-semibold'>{data.taskCounts.newTask}</h2>
                <h3 className='text-xl font-medium mt-1'>New Tasks</h3>
            </div>
            <div className='w-[45%] bg-blue-400 rounded-xl px-10 py-6'>
                <h2 className='text-3xl font-semibold'>{data.taskCounts.completed}</h2>
                <h3 className='text-xl font-medium mt-1'>Completed Tasks</h3>
            </div>
            <div className='w-[45%] bg-green-400 rounded-xl px-10 py-6'>
                <h2 className='text-3xl font-semibold'>{data.taskCounts.active}</h2>
                <h3 className='text-xl font-medium mt-1'>Accepted Tasks</h3>
            </div>
            <div className='w-[45%] bg-yellow-400 rounded-xl px-10 py-6'>
                <h2 className='text-3xl font-semibold'>{data.taskCounts.failed}</h2>
                <h3 className='text-xl font-medium mt-1'>Failed Tasks</h3>
            </div>
        </div>
    )
}

export default TaskListNumbers