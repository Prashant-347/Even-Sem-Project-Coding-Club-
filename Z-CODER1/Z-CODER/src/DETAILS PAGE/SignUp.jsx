import React,{useState} from 'react'
import './SignUp.css'
import { useNavigate } from 'react-router-dom';


function SignUp() {
  const navigate=useNavigate();

  const [input,setInput]=useState({
    name: "",
    institutename: "",
    email: "",
    password: "",
    codeforceshandle: "",
    leetcode : "",
    codechef : "",

  });

  const handlesubmit=(e)=>{
    e.preventDefault(); // prevent Default behaviour so that we can add our custom behaviour after the form is submitted
    localStorage.setItem("user",JSON.stringify(input)); // to store data after filling the form
    navigate("/Loginpage.jsx");
  }

  return (
    <div className='signup-container'>
      <div className="title-container">
        <h1>Sign Up Here</h1>
      </div>
      <form action="submit" onSubmit={handlesubmit} >
        <div className="signup-input">
          <div className="input-field">
            <label>Name:</label>
            <input name="name" value={input.name} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value,})} type="text" placeholder='Enter your Name..' />
          
            <label>Contact Number:</label>
            <input type="number" placeholder='Enter Your Contact Number..' />
          </div>
          <div className="input-field">
            <label>EE-mail:</label>
            <input name="email" value={input.email} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value,})} type="email" placeholder='Enter Your Email Id' />
          
            <label>Institute Name:</label>
            <input name="institutename" value={input.institutename} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value,})} type="text" placeholder='Enter your Institute Name' />
          </div>
          <div className="input-field">
            <label>Password</label>
            <input name="password" value={input.password} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value,})} type="password" placeholder='Enter the password' />
          
            <label>Re-enter the Password</label>
            <input type="password" placeholder='Re-enter the above password' />
          </div>
          <div className='input-field'>
              <label>Codeforces handle</label>
              <input name="codeforceshandle" value={input.codeforceshandle} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value,})} type="text" placeholder='Enter Codeforces handle...' />
          </div>

          <div className='input-field'>
              <label>Enter LeetCode handle</label>
              <input name="leetcode" value={input.leetcode} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value,})} type="text" placeholder='Enter LeetCode handle...' />
          </div>

          <div className='input-field'>
              <label>Enter CodeChef handle</label>
              <input name="codechef" value={input.codechef} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value,})} type="text" placeholder='Enter CodeChef handle...' />
          </div>


        </div>
        <button type="submit" className="submit-btn">Sign Up</button>
      </form>
    </div>
  )
}

export default SignUp
