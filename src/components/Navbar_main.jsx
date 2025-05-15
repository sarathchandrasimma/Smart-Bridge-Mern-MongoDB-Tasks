import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router';
import Navbar from 'react-bootstrap/Navbar';

const Navbar_main = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark" style={{}}>
        <Container>
          {/* <Navbar.Brand as ={Link} to="https://simmasarathchandra.netlify.app/">Sarath Chandra</Navbar.Brand> */}
          <Navbar.Brand href="https://simmasarathchandra.netlify.app/" target="_blank" style={{fontSize:"30px"}}>👉 Sarath Chandra 👈</Navbar.Brand>
          <Nav className="me-auto" style={{display:"flex",justifyContent:"space-around"}}>
            <Nav.Link as ={Link} to="/home" style={{fontSize:"25px"}}>🏠Home</Nav.Link>
            <Nav.Link as ={Link} to="/task1"style={{fontSize:"25px"}}>Task1️⃣</Nav.Link>
            <Nav.Link as ={Link} to="/task2"style={{fontSize:"25px"}}>Task2️⃣</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Navbar_main
