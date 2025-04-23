import axios from 'axios'
import React, { useState } from 'react'
import PostRide from '../../assets/romveC.png'
import './post_ride.css'
import { useNavigate } from 'react-router-dom';

function Post_ride() {
  const [departureLocation,setDepartureLocation]= useState("")
  const[destinationLocation,setDestinationLocation]= useState("")
  const[availableSeat,setAvailableSeat] = useState("")
  const[departureTime,setDepartureTime] = useState("")
  const navigate = useNavigate();
  
 
  const handlePostRide = async () => {
    try{

      const username = localStorage.getItem("username");
       const password = localStorage.getItem("password");
        const payload = {
        
          "departureLocation":departureLocation ,
          "destinationLocation":destinationLocation ,
          "availableSeat":availableSeat ,
          "departureTime": departureTime
        }

        const response = await axios.post("http://localhost:8080/api/PostRide/createRide",payload,{
          headers:{
            'content-Type': 'application/json',
            'Authorization': `Basic ${btoa(`${username}:${password}`)}`
          }
        })
        setDepartureLocation("")
        setDestinationLocation("")
        setAvailableSeat("")
        setDepartureTime("")
        alert("Ride post Successful")
        navigate('/');
      
    }catch(error){

      if (error.response) {
        console.log("Error response:", error.response);
        alert(`Error: ${error.response.data.message || error.response.statusText}`);
      } else {
        console.log("Error:", error);
      }
    }

  }

  return (
    <div className='divC'>
      <div className='postImage'>
        <h2 className='textP'>Post a ride and connect with passengers in minutes!</h2>
        <img src={PostRide} alt='post' className='post'/>
      </div>
      <forms>
        <h1 className='ride'>Post Ride Here</h1>
        <label>departureLocation</label>
        <input type="text" value={departureLocation} onChange={(e) => setDepartureLocation(e.target.value)} placeholder="text" />
        <label>destinationLocation</label>
        <input type="text" value={destinationLocation} onChange={(e) => setDestinationLocation(e.target.value)} placeholder="text" />
        <label>availableSeat</label>
        <input type="number" value={availableSeat} onChange={(e) => setAvailableSeat(e.target.value)} placeholder="number" />
        <label>departureTime</label>
        <input type="datetime-local" value={departureTime} onChange={(e) => setDepartureTime(e.target.value)} placeholder="time" />
        <div className='submit' onClick={handlePostRide}>submit</div>
      </forms>
      
    </div>
  )
}

export default Post_ride
