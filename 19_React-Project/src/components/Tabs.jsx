import React from 'react'

const Tabs = () => {
    const tab = ['photos', 'videos', 'GIF']
  return (
    <div className='flex gap-5 p-10'>
        {tab.map(function(elem,idx) {
            return <button className='bg-gray-600 cursor-pointer active:scale-95 px-5 py-2 rounded uppercase' key = {idx}>{elem}</button>
        })}
    </div>
  )
}

export default Tabs