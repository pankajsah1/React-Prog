import React from 'react'
import { useState } from 'react'

const App = () => {
  const [title, settitle] = useState('')
  const [detail, setdetail] = useState('')

  const [task, settask] = useState([])
  const formHandler = (e) => {
    e.preventDefault(e);

    const copyTask = [...task];
    copyTask.push({title, detail})
    settask(copyTask)
    
    settitle('');
    setdetail('')
    
  }

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    settask(copyTask);
    
  }
  return (
    <div className='h-screen lg:flex bg-amber-200 text-amber-900'>   
        <form 
        onSubmit={(e)=>{formHandler(e)}}
        className='flex lg:w-1/2 flex-col gap-5 items-start p-10'>
          <h1 className='text-3xl font-bold'>Write your notes here...</h1>
            <input 
          type="text" 
          value={title}
          onChange={(e)=>{settitle(e.target.value)}}
          placeholder='Enter Notes Heading'
          className='px-5 py-2 w-full font-medium outline-none border-2 rounded'
           />
          <textarea 
          value={detail}
          onChange={(e)=>{setdetail(e.target.value)}}
          placeholder='Enter Notes Details..' 
          className='px-5 h-32 w-full font-medium py-2 border-2 rounded'
          name="" 
          id=""

          ></textarea>
          <button className='bg-red-500 active:scale-95 cursor-pointer text-white px-5 w-full font-medium py-2 rounded'>Add Notes</button>
        </form>
        <div className='lg:w-1/2 lg:border-l-2 p-10'>
        <h1 className='text-3xl font-bold'>Recent notes</h1>
          <div className='flex flex-wrap items-start justify-start gap-4 mt-5 h-[90%]: overflow-auto'>
           {task.map(function(elem, idx){
            return <div key = {idx} className='flex justify-between flex-col items-start relative h-52 w-40 text-black px-4 py-8 rounded bg-cover bg-[url("https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png")]'>
              <div>
                <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
              <p className='mt-4 leading-tight font-medium text-gray-600'>{elem.detail}</p>
              </div>
              <button onClick={()=>{deleteNote(idx)}} className='bg-red-500 cursor-pointer active:scale-95 w-full py-1 mt-3 text-xs rounded font-bold text-white '>Delete</button>
           </div> 
           })}
          </div>
        </div>
    </div>
  )
}
 
export default App