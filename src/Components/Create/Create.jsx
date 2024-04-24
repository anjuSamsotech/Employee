import React, { useState } from 'react'
import { Button,  Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const Create = () => {
    let navigate= useNavigate();
    const [id, setID] = useState('');
    const [employeeID, setEmployeeID] = useState(null);
    const [name, setName] = useState(null);
    const [department, setDepartment] = useState(null);
    const [age, setAge] = useState(null);
    const [salary, setSalary] = useState(null);
    const [gender, setGender] = useState(null);
    const [experienceYears, setExperienceYears] = useState(null);

    const postData = () => {

       {/*calling post API method to save the employee information*/}
         axios.post(`http://localhost:3002/Employee/`, {
            employeeID,
            name,
            department,
            age,
            salary,
            gender,
            experienceYears
        })
        .then(() => {
            navigate('/')//root
        })
     }

    {/*calling post API method to save the information*/}
     const handleHome = () => {
        navigate('/');
    }
  return (
    <div>
        <h1 className="main-header">Employee Details</h1>
        <div style={{margin: '100px auto', display: 'flex', justifyContent: 'center', border: '2px solid #ccc', padding: '10px', borderRadius: '20px', maxWidth: '1000px'  }}>
        
            <Form style={{ width: '100%',  justifyContent: 'center' }}>

                <div className="row"  style={{ marginTop: '50px', alignItems:"center" }}>
                    <div className="col-lg-6">
                    <label style={{ marginRight: '50px' }}>Employee ID</label>
                    </div>
                    <div className="col-lg-6">
                        <input className="form-control" style={{ width: "300px" }}  placeholder="Employee ID" value={employeeID} onChange={(e) => setEmployeeID(e.target.value)} />
                    </div>
                </div>
                <div className="row" style={{ marginTop: '10px' }}>
                    <div className="col-lg-6">
                            <label style={{ marginRight: '50px' }}>Name</label>
                    </div>
                    <div className="col-lg-6">
                        <input className="form-control" style={{ width: "300px" }}  placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                </div>
                <div className="row" style={{ marginTop: '10px' }}>
                    <div className="col-lg-6">
                            <label style={{ marginRight: '50px' }}>Department</label>
                    </div>
                    <div className="col-lg-6">
                        <select
                            placeholder='Department'
                            className="form-control"
                            style={{ width: "300px" }}
                            value={department}
                            onChange={(e) => setDepartment(e.target.value)}

                        >
                            <option value="Development">Development</option>
                            <option value="QA">QA</option>
                            <option value="Sales">Sales</option>
                            <option value="Admin">Admin</option>

                        </select>
                    </div>
                </div>
                <div className="row" style={{ marginTop: '10px' }}>
                    <div className="col-lg-6">
                            <label style={{ marginRight: '50px' }}>Age</label>
                    </div>
                    <div className="col-lg-6">
                    <input className="form-control"  style={{ width: "300px" }} placeholder='Age' value={age} onChange={(e) => setAge(e.target.value)}/>
                    </div>
                </div>
                <div className="row" style={{ marginTop: '10px' }}>
                    <div className="col-lg-6">
                        <label style={{ marginRight: '50px' }}>Salary</label>
                    </div>
                    <div className="col-lg-6">
                    <input className="form-control"  style={{ width: "300px" }} placeholder='Salary' value={salary} onChange={(e) => setSalary(e.target.value)}/>
                    </div>
                </div>
                <div className="row" style={{ marginTop: '10px' }}>
                    <div className="col-lg-6">
                        <label style={{ marginRight: '50px' }}>Gender</label>
                    </div>
                    <div className="col-lg-6">
                        <select
                            placeholder='Gender'
                            className="form-control"
                            style={{ width: "300px" }}
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                        >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                </div>
                <div className="row" style={{ marginTop: '10px' }}>
                    <div className="col-lg-6">
                        <label style={{ marginRight: '50px' }}>Experience Years</label>
                    </div>
                    <div className="col-lg-6">
                    <input className="form-control"  style={{ width: "300px" }} placeholder='Experience Years' value={experienceYears} onChange={(e) => setExperienceYears(e.target.value)}/>
                    </div>
                </div>
                <div className="row" style={{ marginTop: '10px', display: 'flex', alignItems: 'center' }}>

                    <div className="row">
                        <div className="col-lg-6"></div>
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-lg-6" style={{ marginTop: '10px', display: 'flex', alignItems: 'right' }}>
                                    <Button  style={{ alignItems: 'center' }} className="btn btn-primary"  onClick={postData} type='submit'>Submit</Button>
                                </div>
                                <div className="col-lg-6" style={{ marginTop: '10px', display: 'flex', alignItems: 'left' }}>
                                    <Button  style={{ alignItems: 'center' }} className="btn btn-primary"  onClick={handleHome} type='submit'>Home</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Form>
        </div>
    </div>
  )
}


export default Create