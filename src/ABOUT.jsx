import React from 'react'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const ABOUT = () => {
  const location =useLocation();
  const navigate=useNavigate();
  return (
    <div>
       <h1>Hello, i am {location.pathname.replace('/','')} page</h1>
       <button onClick={()=>navigate(-1)}>Go back</button>
    </div>
  )
}

export default ABOUT
