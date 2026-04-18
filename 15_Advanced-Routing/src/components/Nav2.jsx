import React from 'react'
import { useNavigate } from 'react-router-dom'

const Nav2 = () => {
     const navigate = useNavigate()
  return (
    <div className='px-5 py-3 bg-cyan-700 '>
            <button onClick={()=>{navigate('/')}} className=' rounded font-medium bg-emerald-700 px-5 py-3 m-3 cursor-pointer active:scale-95'>Back to Home Page</button>
        <button onClick={()=>{navigate(-1)}} className='bg-emerald-700 rounded font-medium px-5 py-3 m-3 cursor-pointer active:scale-95'>Back</button>
        </div>
  )
}

export default Nav2