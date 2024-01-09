const HomeUser = (props) =>{
    const  employee = props.formEmployee 
    console.log(employee)
    return(
        <div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>LastName</th>
                    <th>Position</th>
                </tr>
                {employee.map((dataForm) => {
                    return (
                    <tr>
                        <th>{dataForm.name}</th>
                        <th>{dataForm.lastname}</th>
                        <th>{dataForm.position}</th>
    
                    </tr>
                    )
                })}
               
            </table>
        </div>
    )
}
export default HomeUser;