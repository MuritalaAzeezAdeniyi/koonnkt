


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Style from '../sign up/sign_up.module.css';
import axios from 'axios';

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
        <h3 className={Style.register}>Register</h3>
        <form className={Style.form}>
          <div className={Style.input}>
            <input 
              type="text" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              placeholder="username" 
            />
          </div>

          <div className={Style.input}>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="password" 
            />
          </div>

          <div className={Style.input}>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="email" 
            />
          </div>

          <div className={Style.input}>
            <input 
              type="text" 
              value={firstname} 
              onChange={(e) => setFirstname(e.target.value)} 
              placeholder="firstName" 
            />
          </div>

          <div className={Style.input}>
            <input 
              type="text" 
              value={lastname} 
              onChange={(e) => setLastname(e.target.value)} 
              placeholder="secondName" 
            />
          </div>

          <div className={Style.input}>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="">Select Role</option>
              <option value="ADMIN">ADMIN</option>
              <option value="DRIVER">DRIVER</option>
              <option value="PASSENGER">PASSENGER</option>
            </select>
          </div>

          <div className={Style.input}>
            <input 
              type="text" 
              value={phoneNumber} 
              onChange={(e) => setPhoneNumber(e.target.value)} 
              placeholder="phoneNumber" 
            />
          </div>

          {/* Render the driver's fields conditionally based on the role */}
          {role === "DRIVER" && (
            <>
              <div className={Style.input}>
                <input 
                  type="text" 
                  value={drivingLicenceNumber} 
                  onChange={(e) => setDrivingLicenceNumber(e.target.value)} 
                  placeholder="drivingLicenceNumber" 
                />
              </div>

              <div className={Style.input}>
                <input 
                  type="text" 
                  value={vehiclePlateNumber} 
                  onChange={(e) => setVehiclePlateNumber(e.target.value)} 
                  placeholder="vehiclePlateNumber" 
                />
              </div>
            </>
          )}

          <div className={Style.signUpsubmit} onClick={handleSignUp}>submit</div>
        </form>
      </div>
    </div>
  );
}

export default Sign_up;


