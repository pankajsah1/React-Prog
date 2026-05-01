import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
//   throw new Error("Navbar is rendering")
  return (
       <div className=' flex justify-between items-center py-6 px-10 bg-blue-950'>
            <h2 className='font-semibold text-2xl'>Media Search</h2>
            <div className='flex gap-5 items-center'>
                <Link className='text-base font-medium active:scale-95 bg-cyan-100 text-black rounded px-4 py-2' to='/'> Search </Link>
                 <Link className='text-base font-medium active:scale-95 bg-cyan-100 text-black rounded px-4 py-2' to='/collection'> Collection </Link>
            </div>
        </div>
  )
}

export default Navbar