import React,{useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { handleSuccess } from '../utils';
import { ToastContainer } from 'react-toastify';

const Home = () => {
  const [loggedInUser, setLoggedInUser]= useState('');
  const naviagte = useNavigate()
  useEffect(()=> {
    setLoggedInUser(localStorage.getItem('loggedInUser'))
  },[])
  const handleLogout = (e) => {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    handleSuccess('User Loggedout')
    setTimeout(()=> {
      naviagte('/login')
    },1000)
  }
  return (
    <>
    <h1>{loggedInUser}</h1>
    <button onClick={handleLogout}>Logout</button>
    <ToastContainer />
    
    </>


  )
}

export default Home