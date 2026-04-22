import React from 'react'
import { fetchGIF, fetchPhoto, fetchVideo } from './api/mediaApi'

const App = () => {
// console.log("KEY:", import.meta.env.VITE_UNSPLASH_KEY);
  return (
    <div className='h-screen w-full bg-gray-950 text-white'>
      <button className='bg-green-600 m-3 p-3' onClick={ async()=>{
        const data = await fetchPhoto('Cat')
        console.log(data.results);
        
      }}>Get Photos</button>

      <button  className='bg-green-600 m-3 p-3' onClick={ async()=>{
        const data = await fetchVideo('Cat')
        console.log(data.videos);
        
      }}>Get Videos</button>

      <button  className='bg-green-600 m-3 p-3' onClick={ async()=>{
        const data = await fetchGIF('Cat')
        console.log(data);
        
      }}>Get GIF</button>
    </div>
  )
}

export default App