import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Women from './pages/Women'
import Men from './pages/Men'
import Product from './pages/Product'
import Kids from './pages/Kids'
import ContactDetail from './pages/ContactDetail'
import Nav2 from './components/Nav2'
const App = () => {
  return (
    <div>
      <Navbar />
      <Nav2 />
     <Routes>
      <Route path = '/' element ={<Home/>}/>
      <Route path = '/about' element ={<About/>}/>
      <Route path = '/contact' element ={<Contact/>}/>
      <Route path = '/contact/:id' element ={<ContactDetail/>}/>

      <Route path = '/product' element ={<Product/>}>
      <Route path = 'men' element ={<Men/>}/>
      <Route path = 'women' element ={<Women/>}/>
      <Route path = 'kids' element ={<Kids/>}/>
      </Route>

      <Route path='/*' element = {<NotFound/>} />
      
     </Routes>
      <Footer />
    </div>
  )
}

export default App