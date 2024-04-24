import React, { useEffect, useState } from 'react'
import { Button,  Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate} from 'react-router-dom'
// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'; 


const Display= () => {

    let navigate = useNavigate();
    const [id, setID] = useState('');
    const [employeeID, setEmployeeID] = useState(null);
    const [name, setName] = useState(null);
    const [department, setDepartment] = useState(null);
    const [age, setAge] = useState(null);
    const [salary, setSalary] = useState(null);
    const [gender, setGender] = useState(null);
    const [experienceYears, setExperienceYears] = useState(null);

    {/*getting the values from the localstorage*/}
    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setEmployeeID(localStorage.getItem('EmployeeID'));
        setName(localStorage.getItem('Name'));
        setDepartment(localStorage.getItem('Department'));
        setAge(localStorage.getItem('Age'));
        setSalary(localStorage.getItem('Salary'));
        setGender(localStorage.getItem('Gender'));
        setExperienceYears(localStorage.getItem('ExperienceYears'));
    }, []);
   

    {/*navigating to home*/}
    const handleHome = () => {
        navigate('/')
    }

  return (
    <div>
        <h1 className="main-header">Employee Details</h1>

        <div style={{margin: '100px auto', display: 'flex', justifyContent: 'center', border: '2px solid #ccc', padding: '10px', borderRadius: '20px', maxWidth: '1000px'  }}>

            <Form style={{ width: '100%',  justifyContent: 'center' }}>

                <div className="row" style={{ marginTop: '50px', alignItems:"center" }}>
                    <div className="col-lg-6">
                    <label style={{ marginRight: '50px' }}>Employee ID</label>
                    </div>
                    <div className="col-lg-6">
                        <input className="form-control" style={{ width: "300px" }} disabled  placeholder="Employee ID" value={employeeID} onChange={(e) => setEmployeeID(e.target.value)} />
                    </div>
                </div>
                <div className="row" style={{ marginTop: '10px' }}>
                    <div className="col-lg-6">
                            <label style={{ marginRight: '50px' }}>Name</label>
                    </div>
                    <div className="col-lg-6">
                        <input className="form-control" style={{ width: "300px" }}  disabled placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                </div>
                <div className="row" style={{ marginTop: '10px' }}>
                    <div className="col-lg-6">
                            <label style={{ marginRight: '50px' }}>Department</label>
                    </div>
                    <div className="col-lg-6">
                    <input className="form-control"  style={{ width: "300px" }} disabled placeholder='Department' value={department} onChange={(e) => setDepartment(e.target.value)}/>
                    </div>
                </div>
                <div className="row" style={{ marginTop: '10px' }}>
                    <div className="col-lg-6">
                            <label style={{ marginRight: '50px' }}>Age</label>
                    </div>
                    <div className="col-lg-6">
                    <input className="form-control"  style={{ width: "300px" }} disabled placeholder='Age' value={age} onChange={(e) => setAge(e.target.value)}/>
                    </div>
                </div>
                <div className="row" style={{ marginTop: '10px' }}>
                    <div className="col-lg-6">
                        <label style={{ marginRight: '50px' }}>Salary</label>
                    </div>
                    <div className="col-lg-6">
                    <input className="form-control"  style={{ width: "300px" }} disabled placeholder='Salary' value={salary} onChange={(e) => setSalary(e.target.value)}/>
                    </div>
                </div>
                <div className="row" style={{ marginTop: '10px' }}>
                    <div className="col-lg-6">
                        <label style={{ marginRight: '50px' }}>Gender</label>
                    </div>
                    <div className="col-lg-6">
                    <input className="form-control"  style={{ width: "300px" }} disabled placeholder='Gender' value={gender} onChange={(e) => setGender(e.target.value)}/>
                    </div>
                </div>
                <div className="row" style={{ marginTop: '10px' }}>
                    <div className="col-lg-6">
                        <label style={{ marginRight: '50px' }}>Experience Years</label>
                    </div>
                    <div className="col-lg-6">
                    <input className="form-control"  style={{ width: "300px" }} disabled placeholder='Experience Years' value={experienceYears} onChange={(e) => setExperienceYears(e.target.value)}/>
                    </div>
                </div>

                <div className="row" style={{ marginTop: '10px', display: 'flex', alignItems: 'center' }}>

                    <div className="row">
                        <div className="col-lg-6"></div>
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-lg-2" style={{ marginTop: '10px', display: 'flex', alignItems: 'left' }}>
                                    <Button  style={{ alignItems: 'center' }} className="btn btn-primary"  onClick={handleHome} type='submit'>Close</Button>
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


export default Display