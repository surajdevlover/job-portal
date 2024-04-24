import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './../pages/Home';
import Login from './../pages/Login';
import Register from './../pages/Register';
import About from '../pages/About';
import Contact from '../pages/Contact';
import HRSolution from '../pages/HRSolution';
import Training from '../pages/Training';
import Term from '../pages/Term';
import Privacy from '../pages/Privacy';

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home'/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/privacy-policy' element={<Privacy/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path="/contact" element={<Contact/>} />
        <Route path="/hr-solution" element={<HRSolution/>} />
        <Route path="/training" element={<Training/>}/>
        <Route path='/terms-of-use' element={<Term/>}/>
    </Routes>
  )
}

export default Routers