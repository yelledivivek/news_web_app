import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axiosInstance from '../axios'
import jwt_decode from "jwt-decode"

function Navbar() {
  const history = useNavigate()
 
  const Logout = () => {
    axiosInstance.post('blacklist/', {
      refresh_token: localStorage.getItem('refresh_token'),
    });
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('user')
    axiosInstance.defaults.headers['Authorization'] = null;
    history('/login');
  }

const token = JSON.stringify(localStorage.getItem('access_token'));

const user = localStorage.length === 0 ? null : jwt_decode(token)


  return (
   <header className='h-12 bg-[linear-gradient(109.6deg,#116fff_11.2%,#3df5a7_91.1%)] border-b border-grary-primary md-8'>
   <div className='container mx-auto h-fill'>
     <div className='flex justify-between h-full p-2'>
       <div className='text-center flex items-center align-items cursor-pointer'>
         <h1>hello</h1>
       </div>
       <Link to="/login">
        <h4>Login</h4>
       </Link>
       <a href='/login' onClick={Logout}>Logout</a>

     </div>
   </div>
 </header>
  )
}

export default Navbar


// (90.6deg,#096fe0_23.4%,#3df5a7_88.1%)
// (109.6deg,#116fff_11.2%,#70e2e2_91.1%)
// #28C6E2 #00BFFF