import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CollectionCard from '../components/CollectionCard'
import { clearCollection } from '../Redux/Features/collectionSlice'

const CollectionPages = () => {

  const collection = useSelector(state => state.collection.items)
  const dispatch = useDispatch()

  const clearAll = () => {
   const confirm = window.confirm("Are you sure you want to clear your all collections?")
   if(confirm){
     dispatch(clearCollection())
   }
  }
  return (
    <div className='overflow-auto px-10 py-6'>
      {collection.length > 0 ? <div className='flex justify-between mb-6'>
        <h2 className='text-xl font-medium'>
          Your Collection
        </h2>
        <button 
        onClick={clearAll}
        className='active:scale-95 bg-red-700 px-8 py-3 text-lg font-medium rounded transition cursor-pointer'>Clear Collection</button>
      </div>:<h2 className='text-3xl text-gray-300 text-center font-medium'>
          NO ITEMS SAVED YET!
        </h2>}
      <div  className='flex justify-start w-full flex-wrap gap-6'>
      {collection.map((item, idx) => {
        return <div key = {idx}> <CollectionCard item = {item}/> </div>
      })}
    </div>
    </div>
  )
}

export default CollectionPages