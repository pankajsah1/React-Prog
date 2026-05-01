import React from 'react'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CollectionPages from './pages/CollectionPages'
import Navbar from './components/Navbar'
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div className='min-h-screen w-full bg-gray-950 text-white'>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<HomePage/>}/>
        <Route path='/collection' element = {<CollectionPages/>}/>
      </Routes>

      <ToastContainer/>

    </div>
  )
}

export default App