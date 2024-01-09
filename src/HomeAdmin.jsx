import { useState } from "react";
import './Admin.css'
const HomeAdmin = (props) =>{
    const  employee = props.formEmployee 
    const  deleteBtn = props.deleteData
    const setEmployee = props.setEmployee
    
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [position, setPosition] = useState("")

    function saveBtn (e) {
    e.preventDefault();
    const id = Math.floor(Math.random()*1000)
    const keepData ={
        id:id,
        name:name,
        lastname:lastName,
        position:position,
    }
   
    const dataAll = [...employee, keepData ]
        setEmployee(dataAll);
    }
    
    return(
        <>
        <div className="Admin">
        <div>
            <h2>Create User Here</h2>
            <label htmlFor="Name">Name</label>
            <input type="txet" placeholder="Name" onChange={(e)=>setName(e.target.value)}/>

            <label htmlfor="LastName">LastName</label>
            <input type="txet" placeholder="LastName" onChange={(e)=>setLastName(e.target.value)}/>

            <label htmlfor="Position">Position</label>
            <input type="txet" placeholder="Position" onChange={(e)=>setPosition(e.target.value)}/>

            <button onClick={saveBtn}>Save</button>
        </div>
        <div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>LastName</th>
                    <th>Position</th>
                    <th>Action</th>
                </tr>
                {employee.map((dataForm) => {
                    return (
                    <tr>
                        <th>{dataForm.name}</th>
                        <th>{dataForm.lastname}</th>
                        <th>{dataForm.position}</th>
                        
                        <td><button onClick={() => deleteBtn(dataForm.id)}>Delete</button></td>
                    </tr>
                    )
                })}
               
            </table>
        </div>
        </div>
        </>
    )
}

export default HomeAdmin;