import React, { useEffect, useState } from 'react';
import { useParams,useNavigate, Navigate} from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

function ViewComponent() {
    const { id } = useParams()
    const [employee, setEmployee] = useState([])
    const navigate = useNavigate();
    useEffect(() => {
        EmployeeService.getEmployeeById(id).then(res => {
            setEmployee(res.data)
        })
    }, [])

    const goBack =()=>{
        navigate('/employees')
    }
    return (
        <div>
            <br></br>
            <div className='card col-md-6 offset-md-3'>
                <h3 className='text-center'>View Employee Details</h3>
                <div className='card-body'>
                    <div className='row'>
                        {/* <label>Employee First Name:</label> */}
                        <div>Employee First Name:  {employee.firstName}</div>
                    </div>
                    <div className='row'>
                        {/* <label>Employee Last Name:</label> */}
                        <div>Employee Last Name:  {employee.lastName}</div>
                    </div>
                    <div className='row'>
                        {/* <label>Employee Email id:</label> */}
                        <div>Employee Email id: {employee.emailId}</div>
                    </div>
                </div>
                <button className='btn btn-success' onClick={goBack}>Go back</button>
            </div>
        </div>
    );
}
export default ViewComponent