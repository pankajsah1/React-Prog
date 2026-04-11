import React from 'react'
import 'remixicon/fonts/remixicon.css'
import HeroText from './HeroText'
import Arrow from './Arrow'

const LeftCont = () => {
  return (
    <div className='flex flex-col justify-between w-1/3 h-full'>
        <HeroText />
        <Arrow />
    </div>
  )
}

export default LeftCont