import React from 'react'
import Navbar from './components/Navbar'
import { useState } from 'react'

const App = () => {
  const [theme, setTheme] = useState('light')
  return (
    <div>
      <Navbar theme = {theme} >
        <h3>middle of Nav</h3>
        <h3>another middle</h3>
        </Navbar>
    </div>
  )
}

export default App