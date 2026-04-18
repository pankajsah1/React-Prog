import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'

 
const App = () => {

  const [photo, setPhoto] = useState([])
  const [index, setindex] = useState(1)

const getData = async() => {
  const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=30`)
  setPhoto(response.data);
  console.log(response.data);
}

useEffect(function(){
  getData()
},[index])

let printUserPhoto = <h3 className='text-gray-700 font-semibold text-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>"Loading...."</h3>
if(photo.length>0){
  printUserPhoto = photo.map(function(elem , idx){
    return <div key = {idx}>
      <Card elem = {elem} />
      </div>
  })}

  return (
    <div className='bg-black overflow-auto h-screen text-white p-4 '>
      {/* <button 
      onClick={getData} 
      className='bg-green-700 text-black active:scale-95 rounded px-5 py-2 mb-2'>
        Click for photos
      </button> */}
      <div  className='flex flex-wrap gap-4 p-2'>
        {printUserPhoto}
      </div>
      <div className='flex justify-center items-center p-4 gap-6'>
        <button className='bg-amber-400 text-black cursor-pointer active:scale-95 text-sm font-semibold rounded px-5 py-2 mb-2'
       style={{opacity: index == 1 ? 0.5 : 1}}
       onClick={()=>{
         if(index>1){
           setindex(index-1)
           setPhoto([])
         }
        }}
        >
          prev
        </button>
        <h4>page {index}</h4>
        <button className='bg-amber-400 text-black cursor-pointer active:scale-95 text-sm font-semibold rounded px-5 py-2 mb-2'
        onClick={()=>{
          setPhoto([])
          setindex(index+1)
        }}
        >
          next
        </button>
      </div>
    </div>
  )
}

export default App