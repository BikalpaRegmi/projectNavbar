import React from 'react'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Login from './Login'
import HOME from './HOME'
import ABOUT from './ABOUT'
import Contact from './Contact'
import Menu from './Menu';
const Apps = () => {
  return (
    <div>
    <Menu/>
      <Routes>
        <Route exact path='/Login' Component={Login}/>
        <Route exact path='/ABOUT' Component={ABOUT}/>
        <Route exact path='/HOME' Component={HOME}/>
        <Route exact path='/Contact' Component={Contact}/>
      </Routes>
    </div>
  )
}

export default Apps
