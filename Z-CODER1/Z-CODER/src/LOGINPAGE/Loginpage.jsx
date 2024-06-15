import React, { useState } from 'react'
import "./Loginpage.css"
import { useNavigate } from 'react-router-dom';

function Loginpage() {
  const navigate=useNavigate();
  const [input,setInput]=useState({
   
    email: "",
    password: "",

  });
  

  const handlelogin=(e)=>{
    e.preventDefault();
    const loggeduser = JSON.parse(localStorage.getItem("user"));
    if(
      input.email === loggeduser.email && input.password === loggeduser.password 
    )
    { localStorage.setItem("loggedin",true);
      navigate("/Homepage.jsx")}
    else
    {
      alert ("Email or Password shi se bhar !!!");
    }
  }



  return (
    <div className={'mainContainer'}>
      <div className={'titleContainer'}>
        <div>Login</div>
      </div>
      <br />
      <form onSubmit={handlelogin}>
      <div className={'inputContainer'}>
        <input  className={'inputBox'} placeholder="Enter your email here"  name="email" value={input.email} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value,})}/>
      </div> <br/>

      <div className={'inputContainer'}>
        <input  className={'inputBox'} placeholder="Enter your password here" name="password" value={input.password} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value,})}/>
      </div> <br/>

      <div className={'inputContainer'}>
        <input className={'inputButton'} type="submit"  value={'Log in'} />
      </div>

      <div >
        <p>If you don't have an account!</p>
      
    <u> <div className='createcontainer'>  <a href="SignUp.jsx">Create one</a> </div> </u>
      </div>
      </form>
    </div>
  )
}

export default Loginpage