import React, { useEffect, useState } from 'react'
import axios from 'axios'


const App = () => {

  const [photo, setPhoto] = useState([])

const getData = async() => {
  const response = await axios.get('https://picsum.photos/v2/list?page=3&limit=30')
  setPhoto(response.data);
  console.log(response.data);
}

useEffect(function(){
  getData()
},[])

let printUserPhoto = <h3 className='text-gray-700 font-bold text-lg'>"No Photos Availabe"</h3>
if(photo.length>0){
  printUserPhoto = photo.map(function(elem , idx){
    return <div key = {idx}>
      <a href={elem.url} target='_blank'>
        <div className='h-40 w-44 overflow-hidden bg-white rounded-xl'>
        <img className='h-full w-full object-cover ' src={elem.download_url} alt="" />
      </div>
          <h2 className='font-bold text-lg'>{elem.author}</h2>
      </a>
      </div>
  })}

  return (
    <div className='bg-black overflow-auto h-screen text-white p-4 '>
      {/* <button 
      onClick={getData} 
      className='bg-green-700 text-black active:scale-95 rounded px-5 py-2 mb-2'>
        Click for photos
      </button> */}
      <div  className='flex flex-wrap gap-4'>
        {printUserPhoto}
      </div>
    </div>
  )
}

export default App