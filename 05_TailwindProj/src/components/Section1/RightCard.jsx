import React from 'react'
import RightCardCont from './RightCardCont'

const RightCard = (props) => {
  return (
    <div className='h-full shrink-0 w-80 overflow-hidden relative rounded-4xl'>
        <img className='h-full w-full object-cover' src={props.img} alt="" />
        <RightCardCont tag={props.tag} id = {props.id} color= {props.color}/>
    </div>
  )
}

export default RightCard