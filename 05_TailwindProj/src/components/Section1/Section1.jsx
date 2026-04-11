import React from 'react'
import Navbar from './Navbar'
import Page1Cont from './Page1Cont'

const Section1 = (props) => {
    
  return (
    <div className='h-screen w-full'>
        <Navbar />
        <Page1Cont users = {props.users} />
    </div>
  )
}

export default Section1