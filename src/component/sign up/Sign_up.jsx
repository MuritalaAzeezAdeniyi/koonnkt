
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import  Style from '../sign up/sign_up.module.css';
import  axios from 'axios'
import { FaUser} from "react-icons/fa6";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

function Sign_up() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [role, setRole] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [drivingLicenceNumber, setDrivingLicenceNumber] = useState("");
  const [vehiclePlateNumber, setVehiclePlateNumber] = useState("");

  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      const payload = {
        "username": username,
        "password": password,
        "email": email,
        "firstname": firstname,
        "lastname": lastname,
        "role": role,
        "phoneNumber": phoneNumber,
        "drivingLicenceNumber": drivingLicenceNumber,
        "vehiclePlateNumber": vehiclePlateNumber
      };

      const response = await axios.post("http://localhost:8080/api/users/register", payload, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      setUsername("");
      setPassword("");
      setEmail("");
      setFirstname("");
      setLastname("");
      setRole("");
      setPhoneNumber("");
      setDrivingLicenceNumber("");
      setVehiclePlateNumber("");
      alert("Successfully Registered");
      
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={Style.containers}>
      <div className={Style.formD}>
        <form className={Style.form}>
          <h1>Register</h1>
          <div className={Style.input}>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="username" />
            {/* <FaUser className='icon'/> */}
          </div>
          <div className={Style.input}>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" />
            {/* < RiLockPasswordFill className='icons'/> */}
          </div>
          <div className={Style.input}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" />
            {/* <MdEmail className='icon'/> */}
          </div>
          <div className={Style.input}>
            <input type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} placeholder="firstName" />
            {/* <FaUser className='icon'/> */}
          </div>
          <div className={Style.input}>
            <input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} placeholder="secondName" />
            {/* <FaUser className='icon'/> */}
          </div>
          <div className={Style.input}>
            
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="" className='role'>Select Role</option>
              <option value="ADMIN">ADMIN</option>
              <option value="DRIVER">DRIVER</option>
              <option value="PASSENGER">PASSENGER</option>
            </select>
            <div className='icon'/>
          </div>
          <div className={Style.input}>
            <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="phoneNumber" />
            <div className='icon'/>
          </div>
          <div className={Style.input}>
            <input type="text" value={drivingLicenceNumber} onChange={(e) => setDrivingLicenceNumber(e.target.value)} placeholder="drivingLicenceNumber" />
            <div className='icon'/>
          </div>
          <div className={Style.input}>
            <input type="text" value={vehiclePlateNumber} onChange={(e) => setVehiclePlateNumber(e.target.value)} placeholder="vehiclePlateNumber" />
            <div className='icon'/>
          </div>
          <div className={Style.signUpsubmit} onClick={handleSignUp}>submit</div>
        </form>
      </div>
    </div>
  );
}

export default Sign_up;

