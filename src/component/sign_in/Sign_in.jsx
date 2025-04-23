import React from 'react'
import './sign_in.css'
import { useState } from 'react'
import {useNavigate } from 'react-router-dom'
import { FaUser} from "react-icons/fa6";
import { RiLockPasswordFill } from "react-icons/ri";
import axios from 'axios'

function Sign_in() {
 const [username,setUsername]= useState("")
 const [password, setPassword]= useState("")
 const navigate = useNavigate()

   const handleSignIn = async () => {
       try{
        const payload = {
           "username": username,
           "password": password
        }
       
        const response = await axios.post("https://cap-stone-project-3.onrender.com/api/users/login", payload,{
          header:{
            'content-Type': 'application/json'
          }
        })
      
        setUsername("")
        setPassword("")

        localStorage.setItem("username", username); 
        localStorage.setItem("password", password);
      
        alert("Logged in successful")

       }catch(error){
        console.log(error)
       }
       navigate("/")
   }
  return (
    <div className='container'> 
    <div className='wrapper'>
      <div className='form-box login'>
      <form action="">
        <h1>Login</h1>
        <div className='input-box'>
       <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} placeholder="username" />
         <FaUser className='icon'/>
      </div>
       <div className='input-box'>
       <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder=" password" />
       < RiLockPasswordFill className='icons'/>
        </div>
        <div className='sign-submit' onClick={handleSignIn}>Login</div>
      </form>
      </div>
      
    </div>
    </div>
  )
}

export default Sign_in
