import React from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'
const EmployeeDashboard = () => {
    return (
        <div className='bg-[#1C1C1C]'>
            <Header/>
            <TaskListNumbers/>
            <TaskList/>
        </div>
    )
}

export default EmployeeDashboard