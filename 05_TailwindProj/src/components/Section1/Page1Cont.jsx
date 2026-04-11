import React from 'react'
import LeftCont from './LeftCont'
import RightCont from './RightCont'

const Page1Cont = (props) => {
  return (
    <div className='pb-16 pt-6 flex  gap-10 items-center px-18 h-[90vh] bg-amber-200 '>
        <LeftCont/>
        <RightCont users = {props.users} />
    </div>
  )
}

export default Page1Cont 