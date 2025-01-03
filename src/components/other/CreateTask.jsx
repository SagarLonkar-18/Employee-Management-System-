import React, { useContext, useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage'
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {

    const [userData,setUserData] = useContext(AuthContext); 

    const [taskTitle, setTaskTitle] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [assignTo, setAssignTo] = useState('');
    const [category, setCategory] = useState('');
    const [taskDescription, setTaskDescription] = useState('');

    const [newtask, setNewTask] = useState({})

    const submitHandler = (e) => {
        e.preventDefault();

        setNewTask({taskTitle,taskDate,category,taskDescription,active:false,newTask:true,failed:false,completed:false})

        const data = userData;
        
        data.forEach(function(elem){
            if(assignTo==elem.firstName){
                elem.tasks.push(newtask);
                elem.taskCounts.newTask = elem.taskCounts.newTask + 1;
            }
        })
        setUserData(data);
        console.log(data);


        setTaskTitle('');
        setTaskDate('');
        setAssignTo('');
        setCategory('');
        setTaskDescription('');
    }

    return (
        <div className='px-8 mx-8 bg-[#1C1C1C] mt-5 rounded'>
            <form className='flex flex-wrap w-full items-start justify-between px-2 py-4' onSubmit={(e)=>submitHandler(e)}>
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5 font-semibold'>Task Title</h3>
                        <input value={taskTitle} onChange={(e)=>{setTaskTitle(e.target.value)}} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Make a UI design'/>
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5 font-semibold'>Date</h3>
                        <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" value={taskDate} onChange={(e)=>{setTaskDate(e.target.value)}}/>
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5 font-semibold'>Assign To</h3>
                        <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Employee name' value={assignTo} onChange={(e)=>{setAssignTo(e.target.value)}}/>
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5 font-semibold'>Category</h3>
                        <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Design, Development, etc' value={category} onChange={(e)=>{setCategory(e.target.value)}}/>
                    </div>
                </div>
                <div className='w-2/5 flex flex-col items-start'>
                    <h3 className='text-sm text-gray-300 mb-0.5 font-semibold'>Description</h3>
                    <textarea className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' placeholder='Write description...' name="" id="" value={taskDescription} onChange={(e)=>{setTaskDescription(e.target.value)}}></textarea>
                    <button className='text-black font-semibold bg-white py-3 hover:bg-gray-400 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
                </div>
            </form>
        </div>
    )
}

export default CreateTask