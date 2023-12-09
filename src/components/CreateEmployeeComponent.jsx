import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';
import UpdateEmployeeComponent from './UpdateEmployeeComponent';
export default function CreateEmployeeComponent() {
  const navigate = useNavigate();
  const{id} = useParams();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailId: '',
  });

  useEffect(() => {
    if (id == -1) {
      return
    }
    else {
      EmployeeService.getEmployeeById(id).then((res) => {

        let employe = res.data
        setFormData({
          ...formData,
          firstName: employe.firstName,
          lastName: employe.lastName,
          emailId: employe.emailId,
        })
      })
    }

  }, [id])

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.firstName || formData.lastName || formData.email) {
      if (id == -1) {
        EmployeeService.createEmployee(formData).then(res => {
          alert("Employee Added Sucessfully")
          navigate('/employees')
        })
      }
      else {
        EmployeeService.updateEmployee(formData,id).then(res => {
          navigate("/employees");
        });
      }

    }
    else {
      alert("fields are empty")
    }
  }
  const cancleHandler = () => {
    navigate('/employees');
  }
  const getTitle = () =>{
    if(id == -1){
      return <h3 className='text-center'>Add Employee </h3>
    }
    else{
      return <h3 className='text-center'>Update Employee </h3>
    }
  }
  return (
    <div className='container'>
      <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
          {getTitle()}
          <div className='card-body'>

            <form onSubmit={handleSubmit}>
              <div className='form-group'>
                <label>First Name</label>
                <input placeholder='First Name' name='firstName' className='form-control' value={formData.firstName} onChange={changeHandler} />
              </div>
              <div className='form-group'>
                <label>Last Name</label>
                <input placeholder='Last Name' name='lastName' className='form-control' value={formData.lastName} onChange={changeHandler} />
              </div>
              <div className='form-group'>
                <label>Email</label>
                <input placeholder='Email' name='emailId' className='form-control' value={formData.emailId} onChange={changeHandler} />
              </div>
              <br></br>
              <button className='btn btn-success' type='submit'>Save</button>
              <button className='btn btn-danger' type='button' onClick={cancleHandler} style={{ marginLeft: "10px" }}>Cancel</button>
            </form>
          </div>
        </div>
      </div>

    </div>
  );
}
