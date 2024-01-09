import { useState } from "react";
import './Admin.css'
import "./table.css"
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
                    <th className="th">Name</th>
                    <th className="th">LastName</th>
                    <th className="th">Position</th>
                    <th className="th">Action</th>
                </tr>
                {employee.map((dataForm) => {
                    return (
                    <tr>
                        <th className="th">{dataForm.name}</th>
                        <th className="th">{dataForm.lastname}</th>
                        <th className="th">{dataForm.position}</th>
                        
                        <td className="th"><button onClick={() => deleteBtn(dataForm.id)}>Delete</button></td>
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