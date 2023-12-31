import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "../Auth/Login"
import Register from '../Auth/Register'
import Home  from '../HomePage/Home';
function AppRouter() {
  return (
    <Router>
       <Routes>

            <Route path='/' Component={Register}/>
            <Route path='/login' Component={Login}/>
            <Route path='/home' Component={Home}/>
       
       </Routes>
    </Router>
  )
}

export default AppRouter