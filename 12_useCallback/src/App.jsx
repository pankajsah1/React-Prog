import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {
  const [count, setcount] = useState(0)
  const [count2, setcount2] = useState(0)

// const handleClick = () => {
//   setcount(count+1);
//   console.log("You just click the button..")
// }

useEffect(() => {
  console.log("Use Effect is running...")
}, [count])

  return (
    <div>
      <h2>Num1: {count}</h2>
      <h2>Num2: {count2}</h2>
      <button 
      onMouseEnter={()=> {setcount(count+1)}}
      onMouseLeave={()=> {setcount2(count2+10)}}
      >
        increase by 1
      </button>

      {/* <button onClick={()=> {setcount2(count2+10)}}>
        increase by 10
      </button> */}
    </div>
  )
}

export default App