import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';

const Task1 = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.error("Error fetching users:", err);
      });
  }, []);

  return (
    <div >
   <div style={{ textAlign: "center", marginTop: "50px" }}>
  <h2 style={{ 
    display: "inline-block", 
    border: "2px solid black", 
    padding: "5px"
  }}>
    <b>▪️◾◼️⬛ Users Table ⬛◼️◾▪️</b>
  </h2>
</div>


      {/* <h2 style={{display:"flex",justifyContent:"center",marginTop:"50px",border: "2px solid black", padding: "10px"}}><b>▪️◾◼️⬛ Users Table ⬛◼️◾▪️</b></h2> */}
      <div style={{display:"flex",justifyContent:"center",marginTop:"50px",marginRight:"20px",marginLeft:"20px"}}>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>City</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.address.city}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
              <td>{user.company.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      </div>
    </div>
  );
};

export default Task1;