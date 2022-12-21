 import React from 'react';
 import logo from './logo.svg';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from "./Components/home"
import Dashboard from "./Components/dashboard"
import Main from './Components/dashboard/Main/Main';
import Team from './Components/dashboard/MyTeam/Team';
import Deposite from './Components/dashboard/DepositeDetails/Deposite';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import toast, { Toaster } from 'react-hot-toast';
function App() {
  return (
    <div>
        <ToastContainer/>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/dashboard" element={ <Dashboard/> }>
          <Route index element={<Main />} />
          <Route path="team"  element={<Team />} />
          <Route path="deposite"  element={<Deposite />} />
        </Route>
      </Routes> 
    </div>
  );
}

export default App;
