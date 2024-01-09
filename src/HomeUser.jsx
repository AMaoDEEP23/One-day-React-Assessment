import "./user.css"
import "./table.css"

const HomeUser = (props) =>{
    const  employee = props.formEmployee 
    console.log(employee)
    return(
        <div className="User">
            <table>
                <tr>
                    <th className="th">Name</th>
                    <th className="th">LastName</th>
                    <th className="th">Position</th>
                </tr>
                {employee.map((dataForm) => {
                    return (
                    <tr>
                        <th className="th">{dataForm.name}</th>
                        <th className="th">{dataForm.lastname}</th>
                        <th className="th">{dataForm.position}</th>
    
                    </tr>
                    )
                })}
               
            </table>
        </div>
    )
}
export default HomeUser;