import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar_main';
import Task1 from './components/Task1';
import Task2 from './components/Task2';
import Home from './components/Home';
import Footer from "./components/Footer"
// import { Link } from 'react-router';
const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        {/* <Route path="/" element={<div>
          <Link to={"/task1"}>Task1 Card</Link>
          <Link to={"/task2"}>Task2 Card</Link>
        </div>}/> */}
        <Route path="/task1" element={<Task1/>}/>
        <Route path="/task2" element={<Task2/>}/>
        <Route path="*" element={<h1 style={{display:"flex",justifyContent:"space-around",alignItems:"center",height: "100vh",fontSize:"5rem"}}>🚫404 Page Not Found🚫</h1>}/>

      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
