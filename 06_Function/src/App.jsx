import React from 'react'

const App = () => {
  // function btnClicked(){
  //   console.log("Button is clicked");
  // }

  // function onMouseEnt(){
  //   console.log("Mouse entered!");  
  // }

  const pageScrolling = (e) => {
    if(e>0) console.log("sidha scrolling...");
    else console.log("ulata scrolling....")
  }

  return (
    <div onWheel={(e)=>{pageScrolling(e.deltaY)}}>
      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>
    </div>
  )
}

export default App