import React from 'react'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
const HOME = () => {
  const location =useLocation();
  const navigate = useNavigate();
  const goabo = ()=>{
     navigate('/ABOUT')
  }
  return (
    <div>
      <h1>Hello, i am {location.pathname.replace('/','')} page</h1>
      <button onClick={goabo}>GO to about</button>
    </div>
  )
}

export default HOME
