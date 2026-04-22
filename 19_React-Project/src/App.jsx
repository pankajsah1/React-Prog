import React from 'react'
import { fetchPhoto } from './api/mediaApi'

const App = () => {
// console.log("KEY:", import.meta.env.VITE_UNSPLASH_KEY);
  return (
    <div className='h-screen w-full bg-gray-950 text-white'>
      <button onClick={ async()=>{
        const data = await fetchPhoto('Cat')
        console.log(data);
        
      }}>Get Photos</button>
    </div>
  )
}

export default App