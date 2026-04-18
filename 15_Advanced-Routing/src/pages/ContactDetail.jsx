import React from 'react'
import { useParams } from 'react-router-dom'

const ContactDetail = () => {

    const params = useParams();
    console.log(params.id);
    
  return (
    <div>
        <h1>{params.id } ContactDetail Page</h1>
    </div>
  )
}

export default ContactDetail