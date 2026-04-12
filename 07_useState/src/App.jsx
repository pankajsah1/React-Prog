import React from 'react'
import { useState } from 'react'

const App = () => {
  // const [count, setcount] = useState(0)
  // function incCount(){
  //   setcount(count+1)
  // }

  // function decCount(){
  //   setcount(count-1)
  // }
 
  const [num, setnum] = useState({user: "Pankaj", age: 21})

  const changeNum =() => {
    // const newNum = {...num}
    // newNum.user = "Manish"
    // newNum.age = 22
    // setnum(newNum)

    setnum(prev => ({...prev, age: 22}))
  }

  const submitHandler = (e) => {
    e.preventDefault()
    console.log("Name Submitted...");
    
  }

  return (
    <div>
      {/* <h2>{num.user}, {num.age}</h2>
      <button onClick={changeNum}>Click here</button> */}

      <form onSubmit={(e)=>{submitHandler(e)}}>
        <input type="text" placeholder='Enter your name: ' />
      <button>Enter</button>
      </form>
    </div>
  )
}

export default App 