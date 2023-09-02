import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { message } from 'antd';
import axios from 'axios';

function Signup() {

  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  //const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate()


  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      fname: fname,
      lname: lname,
      dob: dob,
      gender: gender,
      email: email,
      mobile: mobile,
      password: password,
      //confirmPassword: confirmPassword
    }
    //console.log(data);
    axios.post('/api/v1/user/signup', data)
    
      .then((response) => {
        console.log(response);
        if (response.data.success) {
          message.success('Register Successfully')
          navigate('/login')  
        } else {
         message.error(response.data.message)
         navigate('/login') 
        }
       
      })
      .catch((error) => {
        console.log(error);
        message.error('Something Went Wrong')
      });
  }

  return (
    <>
      <div className="container col-md-5 mt-4">
        <div className="container text-center mb-5">
          <h3>Sign Up Form</h3>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="mb-3">

            <label htmlFor="fname" className="form-label">First Name</label>
            <input type="text" className="form-control" id="fname" value={fname} onChange={event => setFname(event.target.value)} required />

            <label htmlFor="lname" className="form-label">Last Name</label>
            <input type="text" className="form-control" id="lname" value={lname} onChange={event => setLname(event.target.value)} required />

            <label htmlFor="dob" className="form-label">Date of Birth</label>
            <input type="date" className="form-control" id="dob" value={dob} onChange={event => setDob(event.target.value)} required />


            <div onChange={(e) => setGender(e.target.value)} required>Gender<br/>
              
            <input type="radio" value="Male" name="gender" required /> Male   
              <input type="radio" value="Female" name="gender" required /> Female
              <br/>
            </div>


            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={event => setEmail(event.target.value)} required />


            <label htmlFor="exampleInputtel" className="form-label">Mobile Number</label>
            <input type="tel" className="form-control" id="exampleInputtel" aria-describedby="mobile" value={mobile} onChange={event => setMobile(event.target.value)} required />


            <label htmlFor="enterpassword" className="form-label">Enter Password</label>

            <input type="password" className="form-control" id="enterpassword" placeholder='Atleast 5 characters' minLength={5} value={password} onChange={event => setPassword(event.target.value)} required />

            


        {/*  <label htmlFor="confirmpassword" className="form-label">Confirm Password</label>
        <input type="password" className="form-control" id="confirm_password"  required/>*/}


            <div id="emailHelp" className="form-text">We'll never share your personal details with anyone else.</div>
          </div>
          <div className="mb-3">


          </div>


          <button type="submit" className="btn btn-success col-md-12">Sign Up</button>
          <div className="container mt-3 text-center">
            <p>Already have an account? <Link className="text-decoration-none" style={{ color: "GREEN" }} to="/login">Login</Link></p>
          </div>

        </form>
      </div>
    </>
  )
}

export default Signup