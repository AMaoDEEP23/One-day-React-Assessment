import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import HomeUser from "./HomeUser";
import HomeAdmin from "./HomeAdmin";

const mockEmployees = [
  {
    id: 0,
    name: "mock",
    lastname: 'mocklastname',
    position: "Manager"
  },
  {
    id: 1,
    name: "employee 1",
    lastname: "em",
    position: "Engineer"
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord",
    position: "Designer"
  },
]

// const Home = () => {

//   return (
//     <div>

//     </div>
//   )
// }



function Home () {
  const [employee, setEmployee ] = useState([])
  const [sector, setSector] = useState("")
  useEffect(() =>{
    setEmployee (mockEmployees)
  },[])

  const deleteBtn = (id) => {
    const dataFilter = employee.filter((employee)=> employee.id !== id)
    setEmployee (dataFilter)
  }

    return(
      
    <>
    {sector === "User"?(<h1>Generation Thailand Home - User sector</h1>): sector==="Admin"?(<h1>Generation Thailand Home - Admin sector</h1>):(<h1>Generation Thailand React - Assessment</h1>) }
    <Navbar/>
    
    <button onClick = {() => setSector("User")}>User Home Sector</button>
    <button onClick = {() => setSector("Admin")}>Admin Home Sector</button>
    {sector === "User" && <HomeUser formEmployee = {employee}/>}
    {sector === "Admin" && <HomeAdmin formEmployee = {employee} deleteData={deleteBtn} setEmployee={setEmployee}/>}
    
    </>
    )
}
export default Home;
