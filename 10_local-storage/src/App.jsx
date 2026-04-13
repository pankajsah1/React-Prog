import React from 'react'

const App = () => {

  // localStorage.clear();
  // sessionStorage.clear();

  // localStorage.setItem('user', 'pankaj')

  // const user = localStorage.getItem('user')
  // console.log(user);

  // localStorage.setItem('age', '21')

  // const user = localStorage.getItem('user')
  
  // const age = localStorage.getItem('age')

  // localStorage.removeItem('user')
  // localStorage.removeItem('age')
  // console.log(user, age );

  // const user = {
  //   name: "pankaj",
  //   city: "Forbesganj",
  //   age: 21
  // }
  // localStorage.setItem('user', JSON.stringify(user))

  const user = JSON.parse( localStorage.getItem('user'))
  console.log(user);
  
  
  return (
    <div>Hello Bro!</div>
  )
}

export default App