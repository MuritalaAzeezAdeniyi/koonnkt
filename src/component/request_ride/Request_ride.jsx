import axios from 'axios'
import React from 'react'
import { useState,} from 'react'
import { useNavigate } from 'react-router-dom';
import "./request_ride.css"
import Remove from '../../assets/removeSelect.png'

function Request_ride() {
  const [departureLocation,setDepartureLocation] = useState("")
  const [destinationLocation,setDestinationLocation] = useState("")
  const [departureTime,setDepartureTime] = useState("") 
  const navigate = useNavigate();

  const handleRequestRide = async () => {
    try{
      const username = localStorage.getItem("username");
       const password = localStorage.getItem("password");
       const payload ={
          "departureLocation":departureLocation ,
          "destinationLocation": destinationLocation ,
          "departureTime": departureTime
       }

      const response = await axios.post("https://cap-stone-project-3.onrender.com/api/rideRequest/createRideRequest",payload,{
        headers:{
            'content-Type': 'application/json',
            'Authorization': `Basic ${btoa(`${username}:${password}`)}`
        }
      })
       setDepartureLocation("")
       setDestinationLocation("")
       setDepartureTime("")
       alert("Successfully Request for Ride")
       navigate('/');
    }catch(error){
     console.log(error)
    }

  }

  return (
    <div className='passenger'>
      <div className='removeD'>
      <h2 className='text'>Request for a ride and connect with Driver in minutes!</h2>
      </div>
      <formses>
        <h1 className='request'>Request Your Ride Here</h1>
        <label>departureLocation</label>
        <input type='text' value={departureLocation} onChange={(e) => setDepartureLocation(e.target.value)} placeholder='text'/>
        <label>destinationLocation</label>
        <input type='text' value={destinationLocation} onChange={(e)=> setDestinationLocation(e.target.value)} placeholder='text'/>
        <label>departureTime</label>
        <input type='datetime-local' value={departureTime} onChange={(e)=>setDepartureTime(e.target.value)} placeholder='date'/>
        <div className='submits' onClick={handleRequestRide}>submit</div>
      </formses>
    </div>
  )
}

export default Request_ride
