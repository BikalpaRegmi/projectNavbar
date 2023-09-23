import React, { useState } from 'react'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
const [empty,setempty] = useState();
const [rama,setrama] = useState('');
const style ={
  marginTop:'21px',
}
;
  const toastify = ()=>{
    if(empty && rama){
      toast.error('plz fill the form');
  }else{ 
    toast.success('login sucessful',{
      position:'top-center',
  })
    }
  }
  const Ram =(e)=>{
      setrama(e.target.value)
  }
    return (
    <div>
     <input type="text" placeholder='Enter ur Email' style={style} value={empty} onChange={Ram}/> <br /><br /><br />
     <input type="password" placeholder='Enter ur Password' value={empty} onChange={Ram}/><br /><br /><br />
     <button onClick={toastify}>Submit</button>
    <ToastContainer/>
    </div>
  )
}

export default Login
