import React from 'react'
import { useState } from 'react';
const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    
    const submitHandler = (e) => {
        e.preventDefault();
        console.log("Email is ",email)
        console.log("Password is ",password)
        setEmail("");
        setPassword("");
    }

    return (
        <div className='flex h-screen w-screen items-center justify-center'>
            <div className='border-2 border-gray-300 px-10 py-10 rounded-lg bg-[#1C1C1C] m-8'>
                <h1 className='text-center font-bold text-3xl mb-8'>Welcome :)</h1>
                <form className='flex gap-2 flex-col items-center justify-center' onSubmit={(e)=>{submitHandler(e)}}>
                    <input required value={email} className='outline-none bg-transparent border-2 border-gray-300 py-3 px-4 rounded-xl placeholder:text-gray-400' type="email" placeholder='Enter your email' onChange={(e)=>{setEmail(e.target.value)}}/>
                    <input required value={password} className='outline-none bg-transparent border-2 border-gray-300 py-3 px-4 rounded-xl placeholder:text-gray-400 mt-3' type="password" placeholder='Enter your password' onChange={(e)=>{setPassword(e.target.value)}} />
                    <button className='border-2 text-black bg-white rounded-lg py-2 px-20 mt-3'>Log In</button>
                </form>
            </div>
        </div>
    )
}

export default Login