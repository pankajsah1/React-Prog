import React from 'react'
import { useDispatch } from 'react-redux'
import { removeCollection, removeToast } from '../Redux/Features/collectionSlice'

const CollectionCard = ({item}) => {

    const dispatch = useDispatch()

    const removeFromCollection = (item)=>{
         dispatch(removeCollection(item.id))
         dispatch(removeToast())
    }
  return (
    <div className='w-[17vw] relative h-70 bg-white rounded-xl overflow-hidden'>
        <a target='_blank' className='h-full' href={item.url}>
            {item.type == 'photo' ? <img className='h-full w-full object-cover object-center' src= {item.src} alt="" />: ''}
            {item.type == 'video' ? <video className='h-full w-full object-cover object-center' autoPlay loop muted src= {item.src} alt=""> </video> : ''}
            {item.type == 'gif' ? <img className='h-full w-full object-cover object-center' src= {item.src} alt="" />: ''}
        </a>
        <div id='bottom' className='text-white gap-3 flex justify-between items-center absolute bottom-0 w-full px-4 py-6'>
            <h2 className='text-l h-12 overflow-hidden font-semibold capitalize'>{item.title}</h2>
            <button
            onClick={()=>{
              removeFromCollection(item)
              
            }}
             className='bg-green-600 rounded active:scale-95 text-white px-3 py-1 cursor-pointer font-medium'>Remove</button>
        </div>
    </div>
  )
}

export default CollectionCard