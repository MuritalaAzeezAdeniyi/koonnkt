// 


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/navbar/Navbar'; 
import Sign_up from './component/sign up/Sign_up'; 
import Sign_in from './component/sign_in/Sign_in'; 
import Post_ride from './component/post_ride/Post_ride'; 
import Request_ride from './component/request_ride/Request_ride'; 
import Report from './component/report/Report'; 

function App() {
  return (
    <Router>
     

      <Routes>
     
        <Route path="/" element={<Navbar />} />
        <Route path="/signup" element={<Sign_up />} />
        <Route path="/signin" element={<Sign_in />} />
        <Route path="/post-ride" element={<Post_ride />} />
        <Route path="/request-ride" element={<Request_ride />} />
        <Route path="/report" element={<Report />} />

       
      </Routes>
    </Router>
  );
}

export default App;
