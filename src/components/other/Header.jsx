import React from 'react'

const Header = () => {
    return (
        <div className='flex items-center justify-between px-8 py-4'>
            <h1 className='text-lg md:text-2xl text-medium'>Hello <br/> <span  className='font-semibold text-xl md:text-3xl'>Sagar :)</span></h1>
            <button className='bg-white text-black px-4 py-2 rounded-lg font-semibold md:text-lg'>Log Out</button>
        </div>
    )
}

export default Header