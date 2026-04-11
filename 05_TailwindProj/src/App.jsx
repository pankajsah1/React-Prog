import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {

  const users = [
    {
      img: "https://plus.unsplash.com/premium_photo-1731355866971-42046925bb95?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHN8ZW58MHx8MHx8fDA%3D",
      intro: "",
      color: "royalblue",
      tag: "satisfied"
    },
    {
      img: "https://images.unsplash.com/photo-1773394187175-e7d70aa9a8d2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyMnx0b3dKWkZza3BHZ3x8ZW58MHx8fHx8",
      intro: "",
      color: "lightgreen",
      tag: "under serverd"
    },
    {
      img: "https://images.unsplash.com/photo-1772441936553-31bf98952dfc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzOHx0b3dKWkZza3BHZ3x8ZW58MHx8fHx8",
      intro: "",
      color: "orange",
      tag: "under banked"
    },
    {
      img: "https://images.unsplash.com/photo-1772394412832-98a1a92aff69?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIwN3x0b3dKWkZza3BHZ3x8ZW58MHx8fHx8",
      intro: "",
      color: "royal-blue",
      tag: "satiesfied"
    }
  ]
  return (
    <div>
      <Section1 users = {users}/>
      <Section2/>
    </div>
  )
}

export default App