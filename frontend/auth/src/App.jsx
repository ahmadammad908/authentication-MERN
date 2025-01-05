import React from 'react'
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/login'
import Signup from './pages/Signup'
import Home from './pages/Home'
const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Navigate to="/login"/>}></Route>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/home' element={<Home/>}/>
    </Routes>
    </>
  )
}

export default App