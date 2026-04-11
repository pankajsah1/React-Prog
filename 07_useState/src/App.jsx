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

  return (
    <div>
      <h2>{num.user}, {num.age}</h2>
      <button onClick={changeNum}>Click here</button>
    </div>
  )
}

export default App 