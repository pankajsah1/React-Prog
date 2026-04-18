import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-blue-950 flex justify-between items-center px-8 py-4 '>
        <h2 className='text-amber-600 text-xl font-bold'>Sah Medico.in</h2>
        <div className='text-white flex justify-between items-center gap-8 '>
            <Link className='text-amber-600 text-lg font-bold' to = '/'>Home</Link>
            <Link className='text-amber-600 text-lg font-bold' to = '/about'>About</Link>
            <Link className='text-amber-600 text-lg font-bold' to = '/product'>Product</Link>
            <Link className='text-amber-600 text-lg font-bold' to = '/contact'>Contact</Link>
        
        </div>
    </div>
  )
}

export default Navbar