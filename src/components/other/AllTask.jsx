import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

    const authData = useContext(AuthContext)
    // console.log(authData.employees)

    return (
        <div id='allTasks' className='bg-[#1C1C1C] mx-8 p-5 mt-5 rounded'>
            <div className='bg-gray-400 mb-2 py-2 px-4 flex justify-between rounded text-lg font-medium '>
                <h2 className='w-1/5'>Employee Name</h2>
                <h3 className='w-1/5'>New Task</h3>
                <h5 className='w-1/5'>Active Task</h5>
                <h5 className='w-1/5'>Completed</h5>
                <h5 className='w-1/5'>Failed</h5>
            </div>
            <div className=''>
                {authData.employees.map((elem,idx)=>{
                    return <div key={idx} className='text-lg font-medium border-2 border-white mb-2 py-2 px-4 flex justify-between rounded'>
                        <h2 className='w-1/5'>{elem.firstName}</h2>
                        <h3 className='w-1/5 text-blue-400'>{elem.taskCounts.newTask}</h3>
                        <h5 className='w-1/5 text-yellow-300'>{elem.taskCounts.active}</h5>
                        <h5 className='w-1/5 text-white'>{elem.taskCounts.completed}</h5>
                        <h5 className='w-1/5 text-red-700'>{elem.taskCounts.failed}</h5>
                    </div>
                })}
            </div>
            
        </div>
    )
}

export default AllTask