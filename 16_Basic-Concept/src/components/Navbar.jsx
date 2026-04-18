import React from 'react'

const Navbar = (props) => {
    console.log(props);
    
  return (
    <div>
        {/* <p>{props.setTheme}</p> */}
        <button onClick={()=>{props.setTheme('dark')}}>Change Theme</button>
    </div>
  )
}

export default Navbar