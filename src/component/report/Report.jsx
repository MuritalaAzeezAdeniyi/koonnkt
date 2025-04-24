import React from 'react'
import './report.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import Complain from '../../assets/complain.jpg'

function Report() {
  const [reporter,setReporter] =useState("")
  const [reported, setReported] = useState("")
  const [description,setDescription] = useState("")
   const navigate = useNavigate();
  
  const handleReport = async () =>{
   try{
    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");
    const payload = {
      "reporter": reporter,
      "reported": reported,
      "description": description
    }

    const response = await axios.post("https://cap-stone-project-3.onrender.com/api/report/makeReport",payload,{
      headers:{
          'content-Type': 'application/json',
          'Authorization': `Basic ${btoa(`${username}:${password}`)}`
      }
    })
    setReporter("")
    setReported("")
    setDescription("")
    alert("successfully report")
    navigate('/');
  
  }catch(error){
   console.log(error)
  }
  
}
  return (
    <div className='contain'>
      <div className='complain-img'>
     <h2><span className='span'>Your safety and experience matter to us!</span> <br/> <span className='letter'> If you’ve had any issues with another user, please feel free to share your concerns. </span></h2>
      
     </div>
      <form className='wrappered'>
        <h1 className='names'>Make Your Report Here</h1>
      <div className='input'>
      <label>reporter</label>
      <input type='text'value={reporter} onChange={(e)=> setReporter(e.target.value)} placeholder=''/>
      </div>
      <div className='input'>
      <label>reported</label>
      <input type='text' value={reported} onChange={(e)=> setReported(e.target.value)} placeholder=''/>
      </div>
      <div className='input'>
      <label>description</label> 
      <input type='text' value={description} onChange={(e) => setDescription(e.target.value)} placeholder=''/>
      </div>
      <div className='submits' onClick={handleReport}>Submit</div>
      </form>
      
    </div>
  )
}

export default Report
