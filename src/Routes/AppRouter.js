import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "../Auth/Login"
import Register from '../Auth/Register'
import Home  from '../HomePage/Home';
import CartList from '../Cart/CartList';
function AppRouter() {
  return (
    <Router>
       <Routes>

            <Route path='/' Component={Register}/>
            <Route path='/login' Component={Login}/>
            <Route path='/home' Component={Home}/>
            <Route path='/cart' Component={CartList}/>
       
       </Routes>
    </Router>
  )
}

export default AppRouter