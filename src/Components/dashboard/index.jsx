import React from 'react'
import {Outlet } from "react-router-dom"
import Deposite from './DepositeDetails/Deposite'
import Header from './Header/Header'
import Main from './Main/Main'
import Team from './MyTeam/Team'
import Sidebar from './Sidebar/Sidebar'


function index() {
  return (
    <div className="main Huans">
        <Header />
        <Sidebar />
        <Outlet />
    </div>
  )
}

export default index