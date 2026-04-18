import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div >
        <div className='flex justify-center gap-10 items-center py-4'>
            <Link className='text-amber-600 text-xl font-semibold' to = '/product/men'>Men</Link>
           <Link className='text-amber-600 text-xl font-semibold' to = '/product/women'>Women</Link>
            <Link className='text-amber-600 text-xl font-semibold' to = '/product/kids'>Kids</Link>
        </div>
        <h1>Product Page</h1>

        <Outlet/>
    </div>
  )
}

export default Product